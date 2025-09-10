import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Landing Page</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Welcome to My Landing Page
          </h2>
          <p className="text-lg mb-12">
            This is a simple example of a landing page.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors duration-300 mr-4">
            Get Started
          </button>
          <button className="border border-blue-600 hover:border-blue-700 text-blue-600 hover:text-blue-700 px-8 py-3 rounded-full transition-colors duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Feature 1</h4>
              <p className="text-gray-700">Description of Feature 1.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Feature 2</h4>
              <p className="text-gray-700">Description of Feature 2.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Feature 3</h4>
              <p className="text-gray-700">Description of Feature 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Sign Up Today
          </h3>
          <form className="max-w-sm mx-auto">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled
              >
                Submit
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Landing Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
