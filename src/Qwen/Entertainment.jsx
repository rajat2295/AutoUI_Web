import React from 'react';
// Import material UI components here

const Entertainment = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl font-bold">Entertainment</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Streaming Section */}
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Streaming</h2>
            <ul className="space-y-4">
              <li>Movie 1</li>
              <li>Movie 2</li>
              <li>Movie 3</li>
            </ul>
          </section>

          {/* Games Section */}
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Games</h2>
            <ul className="space-y-4">
              <li>Game 1</li>
              <li>Game 2</li>
              <li>Game 3</li>
            </ul>
          </section>

          {/* Music Section */}
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Music</h2>
            <ul className="space-y-4">
              <li>Song 1</li>
              <li>Song 2</li>
              <li>Song 3</li>
            </ul>
          </section>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2023 Entertainment. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Entertainment;