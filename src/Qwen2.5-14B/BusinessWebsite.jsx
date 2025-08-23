import React from "react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Business Name</div>
        <nav>
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="#services" className="text-gray-700 hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#team" className="text-gray-700 hover:text-blue-500">
                Team
              </a>
            </li>
          </ul>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <span
              className={`h-6 w-6 ${
                isMenuOpen ? "block rotate-45 translate-y-1" : "block"
              }`}
            ></span>
            <span
              className={`h-6 w-6 ${
                isMenuOpen ? "block -rotate-45 -translate-y-1" : "block"
              }`}
            ></span>
            <span
              className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
            ></span>
          </button>
        </nav>
        {isMenuOpen && (
          <ul className="flex flex-col mt-2 space-y-2 md:hidden">
            <li>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md"
              >
                Team
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Web Development
            </h3>
            <p className="text-gray-700">
              Creating custom web applications tailored to your business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Digital Marketing
            </h3>
            <p className="text-gray-700">
              Boosting online presence through SEO, PPC, and social media
              campaigns.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Graphic Design
            </h3>
            <p className="text-gray-700">
              Professional branding and marketing materials for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Get in Touch
        </h2>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Type your message here"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Mission
            </h3>
            <p className="text-gray-700">
              To create impactful digital solutions that drive growth and
              success.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Vision</h3>
            <p className="text-gray-700">
              To be the leading provider of cutting-edge technology solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Values</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Customer-Centric</li>
              <li>Innovation</li>
              <li>Quality</li>
              <li>Responsibility</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="./image.jpeg"
              alt="John Doe"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                John Doe
              </h3>
              <p className="text-gray-700">CEO & Founder</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="./image.jpeg"
              alt="Jane Smith"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-700">CTO</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="./image.jpeg"
              alt="Mike Johnson"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Mike Johnson
              </h3>
              <p className="text-gray-700">Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4 text-center text-white">
        <p>&copy; 2023 Business Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pb-16">
        <Services />
        <Contact />
        <About />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;
