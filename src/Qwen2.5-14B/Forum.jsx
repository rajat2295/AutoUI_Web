import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Forum</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Threads
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Discussions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Moderation
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Latest Threads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-base font-medium mb-2">
                  Thread Title {index + 1}
                </h3>
                <p className="text-sm text-gray-700">
                  Posted by User {index + 1} | 2 days ago
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Active Discussions</h2>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-base font-medium mb-2">
                  Discussion Topic {index + 1}
                </h3>
                <p className="text-sm text-gray-700">
                  Started by User {index + 1} | 5 minutes ago
                </p>
                <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                  Join Discussion
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2023 Forum. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
