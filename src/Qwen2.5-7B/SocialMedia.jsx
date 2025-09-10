import React from "react";

const App = () => {
  const profiles = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/image.jpeg",
      bio: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/image.jpeg",
      bio: "Product Manager",
    },
    { id: 3, name: "Alice Johnson", avatar: "/image.jpeg", bio: "UX Designer" },
  ];

  const posts = [
    { id: 1, user: "John Doe", content: "Building amazing things with React!" },
    { id: 2, user: "Jane Smith", content: "Just finished my latest project." },
    { id: 3, user: "Alice Johnson", content: "Exploring new design trends." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Social Hub</h1>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Explore
          </a>
          <a href="#" className="hover:text-gray-300">
            Messages
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Profiles Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{profile.name}</h3>
                  <p className="text-gray-700">{profile.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Posts Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center mb-4">
                  <img
                    src={
                      post.user === "John Doe" ? "/image.jpeg" : "/image.jpeg"
                    }
                    alt={post.user}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <span className="font-medium">{post.user}</span>
                </div>
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Messaging Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Messaging</h2>
          <div className="bg-white rounded-lg shadow-md p-4 min-h-[200px]">
            <textarea
              placeholder="Type your message..."
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            />
            <button className="mt-2 w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
              Send
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        © 2023 Social Hub. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
