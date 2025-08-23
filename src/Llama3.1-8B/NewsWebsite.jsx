import React, { useState } from "react";

const App = () => {
  const [newsData] = useState([
    {
      title: "Breaking News: Earthquake Hits Tokyo",
      description:
        "A 7.0 magnitude earthquake struck Tokyo, causing significant damage.",
      image: "./image.jpeg",
    },
    {
      title: "New Study Finds Cure for Cancer",
      description: "A groundbreaking study has discovered a cure for cancer.",
      image: "./image.jpeg",
    },
    {
      title: "Tech Giant Acquires Startup for $1 Billion",
      description:
        "Tech giant acquires promising startup for a record-breaking price.",
      image: "./image.jpeg",
    },
  ]);

  const [categories] = useState([
    "Science",
    "Technology",
    "Business",
    "Entertainment",
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">News/Media Website</h1>
      </header>

      {/* Main Content */}
      <main className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData.map((newsItem) => (
            <div
              key={newsItem.title}
              className="bg-white rounded-lg p-4 shadow-md"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4" />
              <h2 className="text-xl font-semibold">{newsItem.title}</h2>
              <p>{newsItem.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Sidebar */}
      <aside className="p-4">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category}
              className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2023 News/Media Website</p>
      </footer>
    </div>
  );
};

export default App;
