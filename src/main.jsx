import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LLMCodeStudio from "./engine/LLMCodeStudio.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <LLMCodeStudio /> */}
    <App />
  </StrictMode>
);
