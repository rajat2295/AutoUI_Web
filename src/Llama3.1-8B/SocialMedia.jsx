import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "John Doe",
      image: "./image.jpeg",
      posts: ["Post 1", "Post 2"],
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "./image.jpeg",
      posts: ["Post 3", "Post 4"],
    },
    {
      id: 3,
      name: "Mike Jones",
      image: "./image.jpeg",
      posts: ["Post 5", "Post 6"],
    },
  ]);
  const [posts, setPosts] = useState([
    { id: 1, author: "John Doe", content: "Hello World!" },
    { id: 2, author: "Jane Smith", content: "This is a test post." },
    { id: 3, author: "Mike Jones", content: "I am learning React." },
  ]);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      receiver: "Jane Smith",
      content: "Hey there!",
    },
    { id: 2, sender: "Jane Smith", receiver: "John Doe", content: "Hi!" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [newPost, setNewPost] = useState("");

  const handleSendMessage = () => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender: "You",
        receiver: "Jane Smith",
        content: newMessage,
      },
    ]);
    setNewMessage("");
  };

  const handleSendPost = () => {
    setPosts([
      ...posts,
      { id: posts.length + 1, author: "You", content: newPost },
    ]);
    setNewPost("");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Social Media App</h1>
          <div className="flex items-center">
            <div className="mr-4">
              <img
                src="./image.jpeg"
                alt="Profile Picture"
                className="rounded-full w-10 h-10"
              />
            </div>
            <div>
              <p className="text-gray-400">Logged in as: John Doe</p>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-2">Profiles</h2>
            <div className="space-y-2">
              {profiles.map((profile) => (
                <div key={profile.id} className="flex items-center">
                  <div className="mr-4">
                    <img
                      src={profile.image}
                      alt="Profile Picture"
                      className="rounded-full w-12 h-12"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{profile.name}</p>
                    <p className="text-gray-500">{profile.posts.join(", ")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-2">Posts</h2>
            <div className="space-y-2">
              {posts.map((post) => (
                <div key={post.id} className="flex items-center">
                  <div className="mr-4">
                    <img
                      src="./image.jpeg"
                      alt="Profile Picture"
                      className="rounded-full w-8 h-8"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-gray-500">{post.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-2">Messaging</h2>
            <div className="space-y-2">
              {messages.map((message) => (
                <div key={message.id} className="flex items-start">
                  <div className="mr-4">
                    <img
                      src="./image.jpeg"
                      alt="Profile Picture"
                      className="rounded-full w-8 h-8"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{message.sender}</p>
                    <p className="text-gray-500">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full border border-gray-300 rounded-lg p-2"
              />
              <button
                onClick={handleSendMessage}
                className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>© 2023 Social Media App</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
