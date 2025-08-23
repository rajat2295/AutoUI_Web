import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">NewsHub</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Multimedia
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Headlines Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Headlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src="./image.jpeg"
                  alt="placeholder"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Placeholder Title {index + 1}
                  </h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Multimedia Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Multimedia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <video controls className="w-full h-48 object-cover">
                  <source src="./video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Video Title {index + 1}
                  </h3>
                  <p className="text-gray-700">Watch this amazing video!</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Technology",
              "Health",
              "Travel",
              "Sports",
              "Finance",
              "Entertainment",
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold">{category}</h3>
                <p className="mt-2 text-gray-700">
                  Explore the latest {category.toLowerCase()} updates here.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md p-4 text-center">
        <p>&copy; 2023 NewsHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
