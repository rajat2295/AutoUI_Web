import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b pb-8 shadow-lg">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-gray-900">Example App</h1>
        </div>
      </header>

      <main className="p-6 bg-white shadow-md rounded-xl">
        <section className="bg-white border-b border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Home</h2>
        </section>

        {/* Home section */}
      </main>

      <footer className="bg-white border-b border-gray-200 p-4 mt-8">
        <div className="container mx-auto px-6">
          <p>&copy; 2023 ExampleApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;