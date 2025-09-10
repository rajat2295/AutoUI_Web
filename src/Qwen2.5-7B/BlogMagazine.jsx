import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Blog Magazine</h1>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-blue-300">
            Home
          </a>
          <a href="#" className="hover:text-blue-300">
            Articles
          </a>
          <a href="#" className="hover:text-blue-300">
            News
          </a>
          <a href="#" className="hover:text-blue-300">
            Categories
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Featured Article */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Article</h2>
          <article className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="./image.jpeg"
              alt="Featured"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Title of the Article
              </h3>
              <p className="text-gray-700 mb-4">By Author Name - Jan 1, 2023</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae turpis at est dictum lacinia.
              </p>
            </div>
          </article>
        </section>

        {/* Latest Articles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, index) => (
              <article
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src="./image.jpeg"
                  alt={`Article ${index + 1}`}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Title of Article {index + 1}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    By Author Name - Jan 1, 2023
                  </p>
                  <p className="text-gray-600">
                    Short description of article...
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* News Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">News</h2>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">
                  News Item {index + 1}
                </h3>
                <p className="text-gray-700 mb-2">
                  By Author Name - Jan 1, 2023
                </p>
                <p className="text-gray-600">Short news summary...</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <ul className="flex space-x-4">
            {[...Array(3)].map((_, index) => (
              <li
                key={index}
                className="bg-white shadow-md rounded-lg px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Category {index + 1}
              </li>
            ))}
          </ul>
        </section>

        {/* Comments Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Comment {index + 1}
                </h3>
                <p className="text-gray-700 mb-2">
                  By Commenter Name - Jan 1, 2023
                </p>
                <p className="text-gray-600">
                  This is a comment on the article...
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2023 Blog Magazine. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
