// // Importing required components and libraries
// import React from 'react';
// import Profile from './Profile';
// import Post from './Post';
// import Message from './Message';

// // Defining the App component
// const App = () => {
//   return (
//     // Using Tailwind CSS classes for inline styling
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
//       {/* Header Section */}
//       <header className="bg-white shadow-md border-b border-gray-200 p-4">
//         <nav className="flex justify-between items-center">
//           <h1 className="text-lg font-bold text-gray-800">Social Media</h1>
//           <ul className="list-none flex items-center">
//             <li className="mr-6">
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out"
//               >
//                 Home
//               </a>
//             </li>
//             <li className="mr-6">
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out"
//               >
//                 Discover
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       {/* Main Content Section */}
//       <main className="pt-8 pb-10">
//         {/* Profiles Section */}
//         <section className="bg-gray-100 p-6 md:p-12">
//           <h2 className="text-lg font-bold mb-4">Profiles</h2>
//           <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
//             <Profile
//               id="profile-1"
//               imageSrc="./image.jpeg"
//               name="John Doe"
//               bio="Software Engineer at XYZ Corporation"
//             />
//             <Profile
//               id="profile-2"
//               imageSrc="./image.jpeg"
//               name="Jane Smith"
//               bio="Frontend Developer at ABC Inc."
//             />
//           </div>
//         </section>

//         {/* Posts Section */}
//         <section className="bg-gray-100 p-6 md:p-12">
//           <h2 className="text-lg font-bold mb-4">Posts</h2>
//           <ul className="list-none">
//             <Post
//               id="post-1"
//               imageSrc="./image.jpeg"
//               title="Hello World!"
//               content="This is a sample post."
//             />
//             <Post
//               id="post-2"
//               imageSrc="./image.jpeg"
//               title="Sample Post 2"
//               content="This is another sample post."
//             />
//           </ul>
//         </section>

//         {/* Messaging Section */}
//         <section className="bg-gray-100 p-6 md:p-12">
//           <h2 className="text-lg font-bold mb-4">Messaging</h2>
//           <Message
//             id="message-1"
//             content="Hello, how are you?"
//             author="John Doe"
//             time="10:00 AM"
//           />
//         </section>
//       </main>

//       {/* Footer Section */}
//       <footer className="bg-gray-100 p-4 text-gray-600">
//         <div className="container mx-auto px-4 py-6 flex justify-between">
//           <span>&copy; 2023 Social Media</span>
//           <ul className="list-none">
//             <li className="mr-4">
//               <a href="#" className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out">
//                 Terms of Service
//               </a>
//             </li>
//             <li className="mr-4">
//               <a href="#" className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out">
//                 Privacy Policy
//               </a>
//             </li>
//           </ul>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;

// V2 made sure to define the imported components within the same file
// Importing required components and libraries
import React from 'react';

// Defining Profile component
const Profile = ({ id, imageSrc, name, bio }) => {
  return (
    <div className="bg-white shadow-md border-b border-gray-200 p-4 mb-6">
      <img src={imageSrc} alt={name} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold mt-4">{name}</h2>
      <p className="text-gray-600 text-sm mb-6">{bio}</p>
    </div>
  );
};

// Defining Post component
const Post = ({ id, imageSrc, title, content }) => {
  return (
    <div className="bg-white shadow-md p-4 mb-6">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold mt-4">{title}</h2>
      <p className="text-gray-600 text-sm mb-6">{content}</p>
    </div>
  );
};

// Defining Message component
const Message = ({ id, content, author, time }) => {
  return (
    <div className="bg-white shadow-md p-4 mb-6">
      <p className="text-gray-600 text-sm mb-2">{author}:</p>
      <p className="text-gray-600 text-sm">{content}</p>
      <p className="text-gray-600 text-sm mt-2">{time}</p>
    </div>
  );
};

// Defining the App component
const App = () => {
  return (
    // Using Tailwind CSS classes for inline styling
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      {/* Header Section */}
      <header className="bg-white shadow-md border-b border-gray-200 p-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-800">Social Media</h1>
          <ul className="list-none flex items-center">
            <li className="mr-6">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li className="mr-6">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out"
              >
                Discover
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="pt-8 pb-10">
        {/* Profiles Section */}
        <section className="bg-gray-100 p-6 md:p-12">
          <h2 className="text-lg font-bold mb-4">Profiles</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Profile
              id="profile-1"
              imageSrc="./image.jpeg"
              name="John Doe"
              bio="Software Engineer at XYZ Corporation"
            />
            <Profile
              id="profile-2"
              imageSrc="./image.jpeg"
              name="Jane Smith"
              bio="Frontend Developer at ABC Inc."
            />
          </div>
        </section>

        {/* Posts Section */}
        <section className="bg-gray-100 p-6 md:p-12">
          <h2 className="text-lg font-bold mb-4">Posts</h2>
          <ul className="list-none">
            <Post
              id="post-1"
              imageSrc="./image.jpeg"
              title="Hello World!"
              content="This is a sample post."
            />
            <Post
              id="post-2"
              imageSrc="./image.jpeg"
              title="Sample Post 2"
              content="This is another sample post."
            />
          </ul>
        </section>

        {/* Messaging Section */}
        <section className="bg-gray-100 p-6 md:p-12">
          <h2 className="text-lg font-bold mb-4">Messaging</h2>
          <Message
            id="message-1"
            content="Hello, how are you?"
            author="John Doe"
            time="10:00 AM"
          />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-100 p-4 text-gray-600">
        <div className="container mx-auto px-4 py-6 flex justify-between">
          <span>&copy; 2023 Social Media</span>
          <ul className="list-none">
            <li className="mr-4">
              <a href="#" className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out">
                Terms of Service
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;