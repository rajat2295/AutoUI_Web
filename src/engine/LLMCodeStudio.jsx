import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * LLM Code Studio
 * ------------------------------------------------------------
 * A lightweight, in-browser "replit-like" playground with a
 * ChatGPT-style UI on the left, code viewer in the middle, and
 * live preview sandbox on the right.
 *
 * Key features
 * - Chat with your backend LLM at http://localhost:8000/llm/invoke
 * - Reads code inside ``` fences from the model's response
 * - Auto-resolves npm deps via esm.sh in an iframe sandbox
 * - Renders the emitted React component/app live
 * - Shows errors, console logs, and lets you nudge the LLM to fix
 * - Stores your chat + runs in localStorage
 * - Works with React, React Router, Tailwind (via CDN), most ESM deps
 *
 * Notes
 * - The runner expects the backend to return code in a single "file".
 *   We create two virtual files in the iframe: app.js and index.js.
 * - If the code includes `export default ...`, we mount it as <App />.
 *   Otherwise we execute the code as-is and let it self-mount.
 * - For imports like `react`, `react-dom/client`, `react-router-dom`,
 *   and most npm packages, we map them to esm.sh during transform.
 */

// ----------------------------- Utilities ------------------------------
const STORAGE_KEY = "llm-code-studio:v1";

function classNames(...arr) {
  return arr.filter(Boolean).join(" ");
}

function saveSession(session) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch {}
}

function loadSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function extractCodeBlocks(text) {
  if (!text) return [];
  const blocks = [];
  // Match ```, `````` and variants with optional language
  const fence = /```+([\w-]*)\n([\s\S]*?)```+/g;
  let m;
  while ((m = fence.exec(text)) !== null) {
    blocks.push({ lang: (m[1] || "").trim().toLowerCase(), code: m[2] });
  }
  if (blocks.length === 0) {
    // Fallback: treat the whole thing as code
    blocks.push({ lang: "", code: text });
  }
  return blocks;
}

function guessFileType(lang) {
  if (["jsx", "tsx", "javascript", "js"].includes(lang)) return "jsx";
  if (["html"].includes(lang)) return "html";
  if (["css"].includes(lang)) return "css";
  return "jsx"; // default
}

function parseImports(code) {
  // Very forgiving import parser for bare module specifiers
  const importRe =
    /import\s+[^'"\n]+from\s+['"]([^'"\.\/][^'\"]*)['"];?|import\(['"]([^'"\.\/][^'\"]*)['"]\)/g;
  const set = new Set();
  let m;
  while ((m = importRe.exec(code)) !== null) {
    const spec = (m[1] || m[2] || "").trim();
    if (spec) set.add(spec);
  }
  return Array.from(set);
}

function toEsmUrl(pkg) {
  // Map common aliases and keep latest versions via esm.sh
  const map = {
    react: "https://esm.sh/react",
    "react-dom": "https://esm.sh/react-dom",
    "react-dom/client": "https://esm.sh/react-dom/client",
    "react-router-dom": "https://esm.sh/react-router-dom",
  };
  if (map[pkg]) return map[pkg];
  return `https://esm.sh/${pkg}`;
}

function transformImportsToCDN(code) {
  // Replace bare imports with esm.sh URLs (naive but works for many cases)
  return code.replace(/from\s+['\"]([^'\"\.\/][^'\"]*)['\"]/g, (m, spec) => {
    return `from "${toEsmUrl(spec)}"`;
  });
}

function hasDefaultExport(code) {
  return /export\s+default\s+/m.test(code);
}

function getTimestamp() {
  const d = new Date();
  return d.toLocaleString();
}

// ----------------------------- Runner ------------------------------
function useSandbox({ source }) {
  const iframeRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | building | running | error
  const [logs, setLogs] = useState([]);
  const [lastError, setLastError] = useState(null);

  useEffect(() => {
    setLogs([]);
    setLastError(null);
    if (!source) return;

    const iframe = document.createElement("iframe");
    iframe.setAttribute("sandbox", "allow-scripts allow-same-origin");
    iframe.className = "w-full h-full bg-white rounded-2xl ring-1 ring-black/5";

    const mount = (html) => {
      if (!iframe.contentWindow) return;
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      iframe.src = url;
    };

    const onMessage = (ev) => {
      if (!ev.data || ev.source !== iframe.contentWindow) return;
      const { type, payload } = ev.data;
      if (type === "ready") setStatus("running");
      if (type === "log") setLogs((l) => [...l, { t: "log", msg: payload }]);
      if (type === "error") {
        setLastError(payload);
        setStatus("error");
      }
    };

    window.addEventListener("message", onMessage);
    setStatus("building");

    // Build the iframe HTML
    const { appJs, indexJs, importMap } = buildVirtualFiles(source);
    const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Sandbox</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script async src="https://unpkg.com/es-module-shims@1.10.0/dist/es-module-shims.min.js"></script>
    <script type="importmap">${JSON.stringify(
      { imports: importMap },
      null,
      2
    )}</script>
    <style>html,body,#root{height:100%;} body{margin:0;}</style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      // Capture errors & console
      const origLog = console.log;
      console.log = (...args) => { parent.postMessage({ type: 'log', payload: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ') }, '*'); origLog(...args); };
      window.addEventListener('error', (e) => {
        parent.postMessage({ type: 'error', payload: String(e.error || e.message) }, '*');
      });
    </script>
    <script type="module">${indexJs}</script>
    <script type="module" id="app-js">${appJs}</script>
    <script>parent.postMessage({ type: 'ready' }, '*');</script>
  </body>
</html>`;

    mount(html);

    const host = iframeRef.current;
    if (host) {
      host.innerHTML = "";
      host.appendChild(iframe);
    }

    return () => {
      window.removeEventListener("message", onMessage);
      try {
        host && (host.innerHTML = "");
      } catch {}
    };
  }, [source]);

  return { iframeRef, status, logs, lastError };
}

function buildVirtualFiles(raw) {
  // Determine code and deps
  const blocks = extractCodeBlocks(raw);
  const main = blocks[0]?.code || raw;
  const transformed = transformImportsToCDN(main);
  const deps = parseImports(transformed);

  const importMap = {};
  deps.forEach((d) => (importMap[d] = toEsmUrl(d)));

  const isDefault = hasDefaultExport(transformed);
  const appJs = transformed;
  const indexJs = isDefault
    ? `import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from '#app';\ncreateRoot(document.getElementById('root')).render(React.createElement(App));`
    : `import '"#app"'; // Execute user code which is expected to self-mount`;

  // We virtualize the app file via an import alias handled by importmap
  importMap["#app"] = "data:text/javascript," + encodeURIComponent(appJs);

  return { appJs, indexJs, importMap };
}

// ----------------------------- Main UI ------------------------------
export default function LLMCodeStudio() {
  const persisted = loadSession();
  const [messages, setMessages] = useState(
    persisted?.messages || [
      {
        role: "system",
        content:
          "You are coding assistant. Return a single-file React component inside triple backticks.",
      },
    ]
  );
  const [input, setInput] = useState("");
  const [runningSource, setRunningSource] = useState(persisted?.lastRun || "");
  const [selectedCode, setSelectedCode] = useState(persisted?.lastRun || "");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    saveSession({ messages, lastRun: runningSource });
  }, [messages, runningSource]);

  const { iframeRef, status, logs, lastError } = useSandbox({
    source: selectedCode,
  });

  const lastAssistant = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === "assistant") return messages[i];
    }
    return null;
  }, [messages]);

  function addMessage(role, content) {
    setMessages((m) => [...m, { role, content, ts: getTimestamp() }]);
  }

  async function askLLM(question) {
    setBusy(true);
    try {
      addMessage("user", question);
      const res = await fetch("http://localhost:8000/llm/invoke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: { question } }),
      });
      const data = await res.json();
      const payload = data?.output ?? "";
      addMessage("assistant", payload);
      // auto-select newest code block
      const firstBlock = extractCodeBlocks(payload)[0]?.code || payload;
      setSelectedCode(firstBlock);
      setRunningSource(firstBlock);
    } catch (e) {
      addMessage("assistant", `Error talking to backend: ${String(e)}`);
    } finally {
      setBusy(false);
    }
  }

  function runSelected() {
    setRunningSource(selectedCode);
  }

  function requestFix() {
    const err = lastError ? `\nError encountered: ${lastError}` : "";
    const last = lastAssistant?.content || "";
    const code = extractCodeBlocks(last)[0]?.code || last;
    const prompt = `Please fix the following code. Keep it to a single-file React component wrapped in triple backticks. ${err}\n\nCode to fix:\n\n\`\`\`jsx\n${code}\n\`\`\``;
    askLLM(prompt);
  }

  function clearChat() {
    setMessages([
      {
        role: "system",
        content:
          "You are coding assistant. Return a single-file React component inside triple backticks.",
      },
    ]);
    setInput("");
  }

  // --------------- Layout ---------------
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900">
      <div className="h-full grid grid-cols-1 xl:grid-cols-12 gap-4 p-4">
        {/* Chat panel */}
        <section className="xl:col-span-3 flex flex-col rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
          <header className="p-3 border-b flex items-center justify-between">
            <h2 className="font-semibold">Chat</h2>
            <div className="flex gap-2">
              <button
                onClick={clearChat}
                className="px-2 py-1 text-sm rounded-xl bg-slate-100 hover:bg-slate-200"
              >
                Clear
              </button>
            </div>
          </header>
          <div className="flex-1 overflow-auto p-3 space-y-3">
            {messages
              .filter((m) => m.role !== "system")
              .map((m, i) => (
                <div
                  key={i}
                  className={classNames(
                    "rounded-2xl p-3 text-sm",
                    m.role === "user" ? "bg-slate-100" : "bg-indigo-50"
                  )}
                >
                  <div className="opacity-60 text-[11px] mb-1">
                    {m.role} {m.ts ? `• ${m.ts}` : ""}
                  </div>
                  <pre className="whitespace-pre-wrap break-words">
                    {m.content}
                  </pre>
                </div>
              ))}
          </div>
          <footer className="p-3 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!input.trim()) return;
                askLLM(input.trim());
                setInput("");
              }}
              className="flex gap-2"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe the app or component you want…"
                className="flex-1 rounded-2xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                rows={3}
              />
              <button
                disabled={busy}
                className="self-end h-10 px-4 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
              >
                {busy ? "Sending…" : "Send"}
              </button>
            </form>
            <div className="mt-2 text-[11px] text-slate-500">
              Backend: POST http://localhost:8000/llm/invoke → expects
              {" {{ input: { question } }} and returns {{ output, metadata }}"}
            </div>
          </footer>
        </section>

        {/* Code panel */}
        <section className="xl:col-span-5 flex flex-col rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
          <header className="p-3 border-b flex items-center justify-between">
            <h2 className="font-semibold">Generated Code</h2>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  navigator.clipboard.writeText(selectedCode || "")
                }
                className="px-2 py-1 text-sm rounded-xl bg-slate-100 hover:bg-slate-200"
              >
                Copy
              </button>
              <button
                onClick={runSelected}
                className="px-2 py-1 text-sm rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Run
              </button>
              <button
                onClick={requestFix}
                className="px-2 py-1 text-sm rounded-xl bg-amber-500 text-white hover:bg-amber-600"
              >
                Ask to Fix
              </button>
            </div>
          </header>
          <div className="flex-1 overflow-auto p-0">
            <textarea
              className="w-full h-full p-4 font-mono text-[12px] leading-5 outline-none"
              value={selectedCode}
              onChange={(e) => setSelectedCode(e.target.value)}
              placeholder={`// The app will auto-extract code from the last assistant reply.\n// You can edit it here and click Run.`}
            />
          </div>
          <div className="border-t bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
            Dependencies detected:{" "}
            {parseImports(transformImportsToCDN(selectedCode || ""))?.join(
              ", "
            ) || "(none)"}
          </div>
        </section>

        {/* Preview panel */}
        <section className="xl:col-span-4 flex flex-col rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
          <header className="p-3 border-b flex items-center justify-between">
            <h2 className="font-semibold">Live Preview</h2>
            <span
              className={
                "text-xs px-2 py-1 rounded-xl " +
                (status === "running"
                  ? "bg-emerald-100 text-emerald-700"
                  : status === "error"
                  ? "bg-rose-100 text-rose-700"
                  : status === "building"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-slate-100 text-slate-600")
              }
            >
              {status}
            </span>
          </header>
          <div
            ref={iframeRef}
            className="flex-1 overflow-hidden bg-slate-100"
          ></div>
          <div className="border-t grid grid-rows-[auto_auto] gap-2 p-3">
            {lastError && (
              <div className="text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-xl p-2">
                <div className="font-semibold mb-1">Runtime error</div>
                <pre className="whitespace-pre-wrap break-words">
                  {String(lastError)}
                </pre>
              </div>
            )}
            <div className="text-xs bg-slate-50 border rounded-xl p-2 max-h-32 overflow-auto">
              <div className="font-semibold mb-1">Console</div>
              {logs.length === 0 ? (
                <div className="opacity-60">(no logs yet)</div>
              ) : (
                <ul className="space-y-1">
                  {logs.map((l, i) => (
                    <li key={i} className="font-mono">
                      {l.msg}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
