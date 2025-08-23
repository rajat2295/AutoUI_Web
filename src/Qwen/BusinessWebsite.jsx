import { useState } from "react";

// Header Component
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Business</h1>
        <nav className="flex space-x-6">
          <a href="#services" className="hover:text-blue-500">
            Services
          </a>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#team" className="hover:text-blue-500">
            Team
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

// Services Section Component
const Services = () => {
  return (
    <section id="services" className="bg-gray-100 p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card bg-white shadow-lg rounded-lg p-6">
          <i className="fas fa-code-fork text-blue-500 mb-4"></i>
          <h3 className="text-xl font-bold">Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card bg-white shadow-lg rounded-lg p-6">
          <i className="fas fa-briefcase text-green-500 mb-4"></i>
          <h3 className="text-xl font-bold">Consulting</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card bg-white shadow-lg rounded-lg p-6">
          <i className="fas fa-database text-purple-500 mb-4"></i>
          <h3 className="text-xl font-bold">Data Analysis</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const About = () => {
  return (
    <section id="about" className="bg-gray-200 p-4">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
      <div className="container mx-auto flex flex-col items-center">
        <img
          src="./image.jpeg"
          alt="Business Team"
          className="mb-8 rounded-lg shadow-md"
        />
        <p className="text-lg leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue
          tellus vel lectus faucibus tempor. Sed efficitur neque in sapien
          scelerisque tincidunt.
        </p>
      </div>
    </section>
  );
};

// Team Section Component
const Team = () => {
  const teamMembers = [
    { name: "John Doe", position: "CEO" },
    { name: "Jane Smith", position: "CTO" },
    { name: "Emily Johnson", position: "Lead Developer" },
  ];

  return (
    <section id="team" className="bg-gray-300 p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="card bg-white shadow-lg rounded-lg p-6">
            <img
              src="./image.jpeg"
              alt={`Team Member - ${member.name}`}
              className="mb-4 rounded-full w-1/2 mx-auto"
            />
            <h3 className="text-xl font-bold text-center">{member.name}</h3>
            <p className="text-base text-gray-700 mb-2">{member.position}</p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Section Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="bg-gray-400 p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="container mx-auto max-w-md p-6 bg-white shadow-lg rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <Team />
      <Contact />
      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2023 My Business. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
