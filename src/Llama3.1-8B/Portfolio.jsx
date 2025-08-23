import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("gallery");
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "This is a description of project 1",
      image: "./image1.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a description of project 2",
      image: "./image2.jpg",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-4 py-2 rounded hover:bg-blue-600 ${
                activeTab === "gallery"
                  ? "bg-blue-600 text-white"
                  : "text-white"
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 rounded hover:bg-blue-600 ${
                activeTab === "projects"
                  ? "bg-blue-600 text-white"
                  : "text-white"
              }`}
            >
              Projects
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {activeTab === "gallery" ? (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="bg-white shadow rounded-lg p-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                <h2 className="text-xl font-bold mt-2">{project.title}</h2>
                <p className="mt-2">{project.description}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Project
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio</p>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-400">
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default App;
