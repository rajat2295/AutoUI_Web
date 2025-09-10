// import { useState, useEffect } from 'react';
// import './App.css';

// export default function Home() {
//   const [currentSection, setCurrentSection] = useState('music');

//   const sections = [
//     { id: 'streaming', title: 'Streaming' },
//     { id: 'games', title: 'Games' },
//     { id: 'music', title: 'Music' }
//   ];

//   useEffect(() => {
//     // Add more logic here if needed
//   }, []);

//   return (
//     <div className="App">
//       {/* Header Section */}
//       <header>
//         <h1>Entertainment Website</h1>
//         <nav>
//           {sections.map(section => (
//             <button key={section.id} onClick={() => setCurrentSection(section.id)}>
//               {section.title}
//             </button>
//           ))}
//         </nav>
//       </header>

//       {/* Main Content Section */}
//       <main className="container mx-auto p-4">
//         {currentSection === 'streaming' && (
//           <div className="relative">
//             <h2>Streaming</h2>
//             <p>Welcome to the world of streaming, where you can watch your favorite TV shows and movies in high definition. Our platform offers a wide range of content from popular platforms like Netflix and Amazon Prime Video.</p>
//             <img src="/image.jpeg" alt="Streaming" className="max-w-full mx-auto rounded-lg mt-4 mb-6 w-1/2"/>
//           </div>
//         )}

//         {currentSection === 'games' && (
//           <div className="relative">
//             <h2>Games</h2>
//             <p>Tackle your gaming needs with our comprehensive selection. From AAA titles to indie gems, we have everything you need to enjoy the latest releases and classics from iconic game developers.</p>
//             <img src="/image.jpeg" alt="Streaming" className="max-w-full mx-auto rounded-lg mt-4 mb-6 w-1/2"/>
//           </div>
//         )}

//         {currentSection === 'music' && (
//           <div className="relative">
//             <h2>Music</h2>
//             <p>Explore a diverse array of music genres with our curated playlists. Our platform features exclusive tracks, radio stations, and artist profiles that keep you connected to the rhythm of your world.</p>
//             <img src="/image.jpeg" alt="Streaming" className="max-w-full mx-auto rounded-lg mt-4 mb-6 w-1/2"/>
//           </div>
//         )}
//       </main>

//       {/* Footer Section */}
//       <footer className="bg-gray-900 text-white p-4">
//         <div className="container mx-auto flex flex-col justify-center items-center">
//           <span>&copy; 2023 Entertainment Website</span>
//           <p>Developed by Senior React Developer</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // v2 with more content and aesthetics
import { useState, useEffect } from "react";
import "./App.css";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("music");

  const sections = [
    { id: "streaming", title: "Streaming" },
    { id: "games", title: "Games" },
    { id: "music", title: "Music" },
  ];

  useEffect(() => {
    // Add more logic here if needed
  }, []);

  return (
    <div className="App">
      {/* Header Section */}
      <header>
        <h1>Entertainment Website</h1>
        <nav>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setCurrentSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto p-4">
        {currentSection === "streaming" && (
          <div className="relative">
            <h2>Streaming</h2>
            <p>
              Welcome to the world of streaming, where you can watch your
              favorite TV shows and movies in high definition. Our platform
              offers a wide range of content from popular platforms like Netflix
              and Amazon Prime Video.
            </p>
            <img
              src="/image.jpeg"
              alt="Streaming"
              className="max-w-full mx-auto rounded-lg mt-4 mb-6 w-1/2"
            />
            <div className="mt-8">
              <h3>Popular Shows</h3>
              <ul>
                <li>
                  <a href="#">Breaking Bad</a>
                </li>
                <li>
                  <a href="#">Game of Thrones</a>
                </li>
                <li>
                  <a href="#">The Wire</a>
                </li>
                <li>
                  <a href="#">Stranger Things</a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {currentSection === "games" && (
          <div className="relative">
            <h2>Games</h2>
            <p>
              Tackle your gaming needs with our comprehensive selection. From
              AAA titles to indie gems, we have everything you need to enjoy the
              latest releases and classics from iconic game developers.
            </p>
            <img
              src="/image.jpeg"
              alt="Streaming"
              className="max-w-full mx-auto rounded-lg mt-4 mb-6 w-1/2"
            />
            <div className="mt-8">
              <h3>Top Rated Games</h3>
              <ul>
                <li>
                  <a href="#">The Last of Us Part II</a>
                </li>
                <li>
                  <a href="#">Red Dead Redemption 2</a>
                </li>
                <li>
                  <a href="#">God of War</a>
                </li>
                <li>
                  <a href="#">Fortnite</a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {currentSection === "music" && (
          <div className="relative">
            <h2>Music</h2>
            <p>
              Explore a diverse array of music genres with our curated
              playlists. Our platform features exclusive tracks, radio stations,
              and artist profiles that keep you connected to the rhythm of your
              world.
            </p>
            <img
              src="/image.jpeg"
              alt="Streaming"
              className="max-w-full mx-auto rounded-lg mt-4 mb-6 w-1/2"
            />
            <div className="mt-8">
              <h3>Top Tracks</h3>
              <ul>
                <li>
                  <a href="#">Shape of You - Ed Sheeran</a>
                </li>
                <li>
                  <a href="#">Bohemian Rhapsody - Queen</a>
                </li>
                <li>
                  <a href="#">Someone Like You - Adele</a>
                </li>
                <li>
                  <a href="#">Stairway to Heaven - Led Zeppelin</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-black p-4">
        <div className="containertext-black mx-auto flex flex-col justify-center items-center">
          <span>&copy; 2023 Entertainment Website</span>
          <p>Developed by Senior React Developer</p>
        </div>
      </footer>
    </div>
  );
}
