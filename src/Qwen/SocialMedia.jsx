import React, { useState } from "react";
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white py-4 px-6">
        <h1 className="text-xl font-bold">Social Media</h1>
      </header>

      <main className="p-6">
        {/* Profile List */}
        <div className="mb-6 flex space-x-6">
          <ProfileCard name="John Doe" />
          <ProfileCard name="Jane Smith" />
          <ProfileCard name="Alice Johnson" />
        </div>

        {/* Posts */}
        <h2 className="text-lg font-bold mb-4">Recent Posts</h2>
        <PostCard
          user="John Doe"
          content="Check out this amazing photo!"
          image="/image.jpeg"
        />

        {/* Message Section */}
        <div className="mb-6">
          <MessageSection user="Jane Smith" />
        </div>

        {/* Footer */}
        <footer className="bg-gray-200 text-center py-4 mt-auto">
          <p>&copy; 2023 Social Media</p>
        </footer>
      </main>
    </div>
  );
};

// Sub-components
const ProfileCard = ({ name }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
      <img
        src="/image.jpeg"
        alt={name}
        className="w-12 h-12 rounded-full mb-4"
      />
      <h3 className="text-lg font-bold">{name}</h3>
    </div>
  );
};

const PostCard = ({ user, content, image }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <div className="flex space-x-4 items-center mb-4">
        <img src="/image.jpeg" alt={user} className="w-10 h-10 rounded-full" />
        <h3 className="font-bold">{user}</h3>
      </div>
      <p>{content}</p>
      <img src={image} alt="" className="mt-4 w-full object-cover rounded-lg" />
    </div>
  );
};

const MessageSection = ({ user }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h3 className="font-bold mb-4">{user}'s Messages</h3>
      {/* Add message components here */}
    </div>
  );
};

export default App;
