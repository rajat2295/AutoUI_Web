import React from "react";
import { useState } from "react";

const NewsWebsite = () => {
  const [activeTab, setActiveTab] = useState("Headlines");

  const categories = [
    { name: "Technology", url: "#" },
    { name: "Sports", url: "#" },
    { name: "Business", url: "#" },
    { name: "Health", url: "#" },
    { name: "Science", url: "#" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">News</h1>
        <div className="space-x-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.url}
              className={`px-4 py-2 rounded-md ${
                activeTab === category.name
                  ? "bg-blue-500 text-white"
                  : "text-black"
              } hover:bg-blue-600 hover:text-white`}
            >
              {category.name}
            </a>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 mt-8">
        {/* Tabs */}
        <nav className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("Headlines")}
            className={`px-6 py-2 rounded-md ${
              activeTab === "Headlines"
                ? "bg-blue-500 text-white"
                : "text-black"
            } hover:bg-blue-600 hover:text-white`}
          >
            Headlines
          </button>
          <button
            onClick={() => setActiveTab("Multimedia")}
            className={`px-6 py-2 rounded-md ${
              activeTab === "Multimedia"
                ? "bg-blue-500 text-white"
                : "text-black"
            } hover:bg-blue-600 hover:text-white`}
          >
            Multimedia
          </button>
        </nav>

        {/* Content */}
        <div className="space-y-4">
          {activeTab === "Headlines" && (
            <>
              <h2 className="font-bold text-lg">Latest Technology Trends</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <article className="bg-white p-6 rounded-md shadow-md">
                  <img
                    src="./image.jpeg"
                    alt="News Image"
                    className="w-full h-56 object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold">Latest Tech Innovations</h3>
                  <p className="mt-2 text-gray-700">
                    Discover the latest tech trends and innovations shaping our
                    world.
                  </p>
                </article>
                {/* Add more articles as needed */}
              </div>
            </>
          )}

          {activeTab === "Multimedia" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="./image.jpeg"
                alt="News Image"
                className="w-full h-96 object-cover rounded-md shadow-md"
              />
              {/* Add more multimedia content as needed */}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t p-4 text-center">
        &copy; 2023 News Website. All rights reserved.
      </footer>
    </div>
  );
};

export default NewsWebsite;
