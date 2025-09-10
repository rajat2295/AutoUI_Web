import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-2 flex items-center justify-between">
      <h1 className="font-bold text-lg">Community Forum</h1>
      <nav className="flex space-x-4">
        <a
          href="#"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2 flex justify-between items-center">
      <p className="text-sm">&copy; 2023 Community Forum</p>
      <div className="flex space-x-4">
        <a
          href="#"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

const Thread = ({ user, title, description }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-2">
      <div className="flex space-x-4 items-center">
        <img
          src={user.profilePicture}
          alt={`${user.name}'s Profile`}
          className="w-8 h-8 border border-gray-300 rounded-full"
        />
        <div>
          <h2 className="font-bold">{title}</h2>
          <p className="mt-1 text-sm">Posted by {user.name}</p>
        </div>
      </div>
      <p className="mt-4 text-sm">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded mt-2">
        Discuss
      </button>
    </div>
  );
};

const threads = () => {
  return (
    <div className="container mx-auto p-6">
      {[
        {
          name: "Alice",
          profilePicture: "./image.jpeg",
        },
        {
          name: "Bob",
          profilePicture: "./image.jpeg",
        },
      ].map((user, index) => (
        <Thread
          key={index}
          user={user}
          title={`Thread ${index + 1}`}
          description="This is a discussion on how to make a React app."
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Latest Threads</h2>
        {threads()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
