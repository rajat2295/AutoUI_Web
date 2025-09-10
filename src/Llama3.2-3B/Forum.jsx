import React, { useState } from "react";

const Forum = () => {
  const [threads, setThreads] = useState([
    {
      id: 1,
      title: "Thread 1",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget tristique vulputate, sem nisl aliquam lectus, non malesuada nunc ex vel ex.",
    },
    {
      id: 2,
      title: "Thread 2",
      message:
        "Cras eget ligula euismod, porta nunc at, faucibus erat. Maecenas ullamcorper, nisl sed aliquam tincidunt, diam arcu ultrices nisl, sit amet elementum quam lectus at lorem.",
    },
    {
      id: 3,
      title: "Thread 3",
      message:
        "Vestibulum ut quam non augue blandit convallis. Integer id lorem at velit eleifend tristique. Donec quis magna a libero congue vulputate.",
    },
  ]);
  const [discussions, setDiscussions] = useState([
    { id: 1, threadId: 1, message: "Reply to Thread 1" },
    { id: 2, threadId: 2, message: "Reply to Thread 2" },
    { id: 3, threadId: 3, message: "Reply to Thread 3" },
  ]);
  const [newThread, setNewThread] = useState("");
  const [newDiscussion, setNewDiscussion] = useState("");

  const handleAddThread = () => {
    setThreads([
      ...threads,
      { id: threads.length + 1, title: newThread, message: "" },
    ]);
    setNewThread("");
  };

  const handleAddDiscussion = (threadId) => {
    setDiscussions([
      ...discussions,
      { id: discussions.length + 1, threadId, message: newDiscussion },
    ]);
    setNewDiscussion("");
  };

  const handleModerate = (id) => {
    // Moderation logic here
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Forum</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            New Thread
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            New Discussion
          </button>
        </div>
      </header>

      <main className="p-6">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Threads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threads.map((thread) => (
              <div key={thread.id} className="bg-white shadow-md rounded p-4">
                <h3 className="text-lg font-semibold mb-2">{thread.title}</h3>
                <p>{thread.message}</p>
                <div className="mt-4 flex space-x-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Reply
                  </button>
                  <button
                    onClick={() => handleModerate(thread.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Moderate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Discussions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-white shadow-md rounded p-4"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {discussion.message}
                </h3>
                <p>{discussion.threadId}</p>
                <div className="mt-4 flex space-x-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Reply
                  </button>
                  <button
                    onClick={() => handleModerate(discussion.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Moderate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">New Thread</h2>
          <div className="bg-white shadow-md rounded p-4">
            <input
              type="text"
              value={newThread}
              onChange={(e) => setNewThread(e.target.value)}
              placeholder="Thread Title"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <button
              onClick={handleAddThread}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Thread
            </button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">New Discussion</h2>
          <div className="bg-white shadow-md rounded p-4">
            <input
              type="text"
              value={newDiscussion}
              onChange={(e) => setNewDiscussion(e.target.value)}
              placeholder="Discussion Message"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <div className="flex space-x-4">
              <button
                onClick={() => handleAddDiscussion(threads[0].id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Discussion (Thread 1)
              </button>
              <button
                onClick={() => handleAddDiscussion(threads[1].id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Discussion (Thread 2)
              </button>
              <button
                onClick={() => handleAddDiscussion(threads[2].id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Discussion (Thread 3)
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white shadow-md p-4">
        <div className="text-center">Copyright &copy; 2023 Forum Inc.</div>
      </footer>
    </div>
  );
};

export default Forum;
