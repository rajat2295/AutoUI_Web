

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BusinessWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleSetActiveSection = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Company Name</h1>
          <nav className="flex space-x-4">
            <Link
              to="#"
              className={`px-4 py-2 rounded hover:bg-gray-700 ${
                activeSection === 'home'
                 ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => handleSetActiveSection('home')}
            >
              Home
            </Link>
            <Link
              to="#"
              className={`px-4 py-2 rounded hover:bg-gray-700 ${
activeSection === 'services'
                 ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => handleSetActiveSection('services')}
            >
              Services
            </Link>
            <Link
              to="#"
              className={`px-4 py-2 rounded hover:bg-gray-700 ${
                activeSection === 'contact'
                 ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => handleSetActiveSection('contact')}
            >
              Contact
            </Link>
            <Link
              to="#"
              className={`px-4 py-2 rounded hover:bg-gray-700 ${
                activeSection === 'about'
                 ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => handleSetActiveSection('about')}
            >
              About
            </Link>
            <Link
              to="#"
              className={`px-4 py-2 rounded hover:bg-gray-700 ${
                activeSection === 'team'
                 ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => handleSetActiveSection('team')}
            >
              Team
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            {activeSection === 'home' && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Welcome to Our Company</h2>
                <p className="text-gray-700 mb-4">
                  We are a leading provider of innovative solutions in the industry. Our team of experts is dedicated to delivering exceptional results.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            )}
            {activeSection === 'services' && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Explore Services
                </button>
              </div>
            )}
            {activeSection === 'contact' && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  We are always available to answer your questions. Please reach out to us using the form below.
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <textarea
                    placeholder="Message"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Send Message
                  </button>
                </form>
              </div>
            )}
            {activeSection === 'about' && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">About Our Company</h2>
                <p className="text-gray-700 mb-4">
                  Our company is committed to providing the best solutions in the industry. We have a team of experienced professionals who are dedicated to delivering exceptional results.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Our Story
                </button>
              </div>
            )}
            {activeSection === 'team' && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Meet Our Team
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Company Name</h1>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BusinessWebsite;