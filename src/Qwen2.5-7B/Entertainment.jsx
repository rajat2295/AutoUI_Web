import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center px-6">
        <h1 className="text-lg font-bold">Entertainment Hub</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#streaming"
                className="hover:text-gray-300 transition-colors"
              >
                Streaming
              </a>
            </li>
            <li>
              <a
                href="#games"
                className="hover:text-gray-300 transition-colors"
              >
                Games
              </a>
            </li>
            <li>
              <a
                href="#music"
                className="hover:text-gray-300 transition-colors"
              >
                Music
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Streaming Section */}
        <section id="streaming" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Streaming</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src="./image.jpeg"
                  alt="Movie Poster"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-medium mb-2">
                    Movie Title {index + 1}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Description goes here...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Games Section */}
        <section id="games" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src="./image.jpeg"
                  alt="Game Image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-medium mb-2">
                    Game Name {index + 1}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Description goes here...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Music</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src="./image.jpeg"
                  alt="Album Cover"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-medium mb-2">
                    Album Title {index + 1}
                  </h3>
                  <p className="text-xs text-gray-500">Artist Name</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2023 Entertainment Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
