import React, { useState } from "react";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6">Get Started</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

const Cta = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <p className="text-lg text-gray-700 mb-4">
        We offer a wide range of services that cater to your needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <a
          href="#"
          className="bg-white shadow-lg p-8 rounded-md hover:bg-gray-50 transition-colors duration-200"
        >
          <h3 className="text-xl font-bold mb-4">Development</h3>
          <p className="text-gray-600">
            We specialize in creating custom web applications using React and
            Tailwind CSS.
          </p>
        </a>
        <a
          href="#"
          className="bg-white shadow-lg p-8 rounded-md hover:bg-gray-50 transition-colors duration-200"
        >
          <h3 className="text-xl font-bold mb-4">Design</h3>
          <p className="text-gray-600">
            Our team of designers creates stunning user interfaces that make a
            lasting impression.
          </p>
        </a>
        <a
          href="#"
          className="bg-white shadow-lg p-8 rounded-md hover:bg-gray-50 transition-colors duration-200"
        >
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <p className="text-gray-600">
            We provide 24/7 support to ensure that your website is running
            smoothly.
          </p>
        </a>
      </div>
    </div>
  );
};

const Promotions = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6">Promotions</h2>
      <p className="text-lg text-gray-700 mb-4">
        We offer special promotions to our customers. Don't miss out!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg p-8 rounded-md hover:bg-gray-50 transition-colors duration-200">
          <h3 className="text-xl font-bold mb-4">20% off</h3>
          <p className="text-gray-600">
            Use code PROMO20 at checkout to get 20% off on your first purchase.
          </p>
        </div>
        <div className="bg-white shadow-lg p-8 rounded-md hover:bg-gray-50 transition-colors duration-200">
          <h3 className="text-xl font-bold mb-4">Free shipping</h3>
          <p className="text-gray-600">
            Free shipping on all orders over $50. Use code FREE10 at checkout.
          </p>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-4 px-8 text-center mb-6 w-full">
        <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
      </header>
      <main className="container mx-auto max-w-3xl mt-8">
        <LeadForm />
        <Cta />
        <Promotions />
      </main>
      <footer className="bg-white shadow-md py-4 px-8 text-center mt-auto w-full">
        <p>© 2023 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
