import { useState } from 'react';

const App = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Web Development', description: 'We create custom websites to meet your needs.' },
    { id: 2, name: 'App Development', description: 'Developing mobile applications for iOS and Android devices.' },
    { id: 3, name: 'SEO Optimization', description: 'Enhancing your online presence through search engine optimization.' },
  ]);

  const [teamMembers] = useState([
    { id: 1, name: 'John Doe', role: 'CEO', image: '/path/to/image.jpg' },
    { id: 2, name: 'Jane Smith', role: 'CTO', image: '/path/to/image.jpg' },
    { id: 3, name: 'Emily Johnson', role: 'Senior Developer', image: '/path/to/image.jpg' },
  ]);

  const [contactDetails] = useState({
    address: '123 Main St',
    phone: '(123) 456-7890',
    email: 'info@example.com',
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Our Business</h1>
          <nav className="flex space-x-4">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#team" className="hover:text-blue-700">Team</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Welcome to Our Business</h2>
          <p className="max-w-md text-lg text-gray-700">
            We are a dedicated team of professionals specializing in web development, app
            development, and SEO optimization.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={member.image}
                alt={`${member.name}'s Profile`}
                className="w-40 h-40 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-700 leading-relaxed mb-2">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="bg-white p-6 rounded-lg shadow-md text-left">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border-b focus:border-blue-500 outline-none mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border-b focus:border-blue-500 outline-none mb-4"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 border-b focus:border-blue-500 outline-none mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">Contact Details</h3>
            <p className="mb-4">{contactDetails.address}</p>
            <p className="mb-4">{`Phone: ${contactDetails.phone}`}</p>
            <p className="mb-4">{`Email: ${contactDetails.email}`}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Business Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;