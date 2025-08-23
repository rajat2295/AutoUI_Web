import './App.css';
import React, { useState } from 'react';

const Home = () => {
  const [serviceData] = useState([
    {
      id: 1,
      title: 'Business consulting services',
      description:
        'Consultancy service to provide business development and strategic planning. We help you strategize your business, plan ahead, set goals and define the next steps.',
      cost: '$50 - $150 per hour',
    },
    {
      id: 2,
      title: 'Digital marketing strategies',
      description:
        'Develop effective digital marketing strategies to reach out to target audience. We help you create and maintain a strong online presence with effective marketing campaigns.',
      cost: '$25 - $75 per month',
    },
    {
      id: 3,
      title: 'Custom website development',
      description:
        'Create custom, responsive websites for your business, from planning to launch. Get a complete online platform that fits the unique needs of your company.',
      cost: 'Contact us for free quote',
    },
    {
      id: 4,
      title: 'Social media marketing services',
      description:
        'We help businesses create engaging social media content and strategies to increase brand awareness, attract customers and drive sales. We also provide ongoing monitoring and optimization of social media channels.',
      cost: '$10 - $50 per post',
    },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50 p-8 text-gray-700">
      {/* Header */}
      <header className="w-full flex justify-between items-center border-b pb-4 mb-16">
        <h1 className="text-xl font-bold">Business Solutions</h1>
        <ul className="flex space-x-2 mt-4">
          <li><a href="/" className="hover:text-black text-gray-600 p-3 rounded">Home</a></li>
          <li><a href="#services" className="hover:text-black text-gray-600 p-3 rounded">Services</a></li>
          <li><a href="#contact" className="hover:text-black text-gray-600 p-3 rounded">Contact</a></li>
        </ul>
      </header>

      {/* About */}
      <section id="about" className="bg-white w-full py-16 px-8 mb-32">
        <div className="flex justify-center items-center h-full">
          <div className="p-4 bg-gray-200 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-6">About Business Solutions</h2>
            <p>We provide professional business solutions to help companies grow and succeed. Our services include:</p>
            <ul className="mt-3 space-y-1">
              <li>Business strategy development</li>
              <li>Digital marketing consulting</li>
              <li>Custom website design and development</li>
              <li>Social media management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white w-full py-16 px-8 mb-32">
        <h2 className="text-xl font-bold mb-6 text-center">Our Services</h2>
        {serviceData.map((data, index) => (
          <div key={index} className="bg-gray-100 border-2 rounded-lg p-8 m-4">
            <h3 className="font-semibold text-gray-900 mb-4">{data.title}</h3>
            <p className="text-gray-500">{data.description}</p>
            <span className="px-4 py-1 bg-black font-bold text-white mt-6">
              {data.cost}
            </span>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white w-full py-16 px-8 mb-32">
        <h2 className="text-xl font-bold mb-6 text-center">Contact Us</h2>
        <p>We're happy to help. Please send us an email or give us a call.</p>
        <div className="mt-4 bg-gray-100 border-2 rounded-lg p-8">
          <div className="flex flex-col md:flex-row space-y-2 md:space-x-6 mb-16">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <textarea rows={4} placeholder="Message" />
          <button className="bg-blue-500 text-white w-full rounded-lg py-2 mt-8 hover:bg-blue-600 transition-colors">Send Message</button>
        </div>
      </section>

      {/* Team */}
      <footer id="team" className="bg-gray-100 border-t pt-16 pb-32 px-8">
        <h3 className="text-xl font-bold mb-4 text-center">Meet Our Team Members</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors">
              <img src="./image.jpeg" alt="" />
              <h3 className="font-semibold text-gray-900 mt-2 mb-0">John Doe</h3>
              <p className="text-gray-700">@johndoe</p>
            </div>
          ))}
        </div>
      </footer>

    </div>
  );
};

export default Home;