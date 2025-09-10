// // import React from 'react';
// import { useState } from 'react';

// // const NewsWebsite = () => {
// //   const [activeTab, setActiveTab] = useState('Headlines');

// //   const categories = [
// //     { name: 'Technology', url: '#' },
// //     { name: 'Sports', url: '#' },
// //     { name: 'Business', url: '#' },
// //     { name: 'Health', url: '#' },
// //     { name: 'Science', url: '#' },
// //   ];

// //   return (
// //     <div className="bg-gray-100 min-h-screen">
// //       {/* Header */}
// //       <header className="bg-white shadow-md p-4 flex items-center justify-between">
// //         <h1 className="text-xl font-bold">News</h1>
// //         <div className="space-x-4">
// //           {categories.map((category) => (
// //             <a key={category.name} href={category.url} className={`px-4 py-2 rounded-md ${activeTab === category.name ? 'bg-blue-500 text-white' : 'text-black'} hover:bg-blue-600 hover:text-white`}>
// //               {category.name}
// //             </a>
// //           ))}
// //         </div>
// //       </header>

// //       {/* Main Content */}
// //       <main className="container mx-auto px-4 mt-8">
// //         {/* Tabs */}
// //         <nav className="flex space-x-4 mb-8">
// //           <button
// //             onClick={() => setActiveTab('Headlines')}
// //             className={`px-6 py-2 rounded-md ${activeTab === 'Headlines' ? 'bg-blue-500 text-white' : 'text-black'} hover:bg-blue-600 hover:text-white`}
// //           >
// //             Headlines
// //           </button>
// //           <button
// //             onClick={() => setActiveTab('Multimedia')}
// //             className={`px-6 py-2 rounded-md ${activeTab === 'Multimedia' ? 'bg-blue-500 text-white' : 'text-black'} hover:bg-blue-600 hover:text-white`}
// //           >
// //             Multimedia
// //           </button>
// //         </nav>

// //         {/* Content */}
// //         <div className="space-y-4">
// //           {activeTab === 'Headlines' && (
// //             <>
// //               <h2 className="font-bold text-lg">Technology</h2>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                 <article className="bg-white p-6 rounded-md shadow-md">
// //                   <img src="./image.jpeg" alt="News Image" className="w-full h-56 object-cover mb-4" />
// //                   <h3 className="text-xl font-bold">Latest Technology Trends</h3>
// //                   <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
// //                 </article>
// //                 {/* Add more articles as needed */}
// //               </div>
// //             </>
// //           )}

// //           {activeTab === 'Multimedia' && (
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <img src="./image.jpeg" alt="News Image" className="w-full h-96 object-cover rounded-md shadow-md" />
// //               {/* Add more multimedia content as needed */}
// //             </div>
// //           )}
// //         </div>

// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-gray-50 border-t p-4 text-center">
// //         &copy; 2023 News Website. All rights reserved.
// //       </footer>
// //     </div>
// //   );
// // };

// // export default NewsWebsite;

// // V2 more content and asthetic

// import React from 'react';

// const NewsWebsite = () => {
//   const [activeTab, setActiveTab] = useState('Headlines');

//   const categories = [
//     { name: 'Technology', url: '#' },
//     { name: 'Sports', url: '#' },
//     { name: 'Business', url: '#' },
//     { name: 'Health', url: '#' },
//     { name: 'Science', url: '#' },
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header */}
//       <header className="bg-white shadow-md p-4 flex items-center justify-between">
//         <h1 className="text-xl font-bold">News</h1>
//         <div className="space-x-4">
//           {categories.map((category) => (
//             <a key={category.name} href={category.url} className={`px-4 py-2 rounded-md ${activeTab === category.name ? 'bg-blue-500 text-white' : 'text-black'} hover:bg-blue-600 hover:text-white`}>
//               {category.name}
//             </a>
//           ))}
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 mt-8">
//         {/* Tabs */}
//         <nav className="flex space-x-4 mb-8">
//           <button
//             onClick={() => setActiveTab('Headlines')}
//             className={`px-6 py-2 rounded-md ${activeTab === 'Headlines' ? 'bg-blue-500 text-white' : 'text-black'} hover:bg-blue-600 hover:text-white`}
//           >
//             Headlines
//           </button>
//           <button
//             onClick={() => setActiveTab('Multimedia')}
//             className={`px-6 py-2 rounded-md ${activeTab === 'Multimedia' ? 'bg-blue-500 text-white' : 'text-black'} hover:bg-blue-600 hover:text-white`}
//           >
//             Multimedia
//           </button>
//         </nav>

//         {/* Content */}
//         <div className="space-y-4">
//           {activeTab === 'Headlines' && (
//             <>
//               <h2 className="font-bold text-lg">Latest Technology Trends</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <article className="bg-white p-6 rounded-md shadow-md">
//                   <img src="./image.jpeg" alt="News Image" className="w-full h-56 object-cover mb-4" />
//                   <h3 className="text-xl font-bold">Latest Tech Innovations</h3>
//                   <p className="mt-2 text-gray-700">Discover the latest tech trends and innovations shaping our world.</p>
//                 </article>
//                 {/* Add more articles as needed */}
//               </div>
//             </>
//           )}

//           {activeTab === 'Multimedia' && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <img src="./image.jpeg" alt="News Image" className="w-full h-96 object-cover rounded-md shadow-md" />
//               {/* Add more multimedia content as needed */}
//             </div>
//           )}
//         </div>

//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-50 border-t p-4 text-center">
//         &copy; 2023 News Website. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default NewsWebsite;

// V2 more content and asthetic

import { useState } from "react";

const NewsArticles = [
  {
    id: 1,
    headline: "Breaking news!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel neque non arcu aliquet fermentum.",
    image: "./news.jpg",
  },
  {
    id: 2,
    headline: "Local story",
    description:
      "In a move that could shake up the tech industry, Google is reportedly planning to acquire Twitter for $10 billion.",
    videoSrc: "./video.mp4",
  },
  {
    id: 3,
    headline: "International affair",
    description:
      "The United States and China are engaged in a heated debate over trade tariffs, with both countries taking steps to retaliate against each other's actions.",
    chartImage: "./chart.png",
  },
];

const App = () => {
  const [articleIndex, setArticleIndex] = useState(0);

  const handleNextClick = () => {
    if (articleIndex < NewsArticles.length - 1) {
      setArticleIndex(articleIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (articleIndex > 0) {
      setArticleIndex(articleIndex - 1);
    }
  };

  const currentArticle = NewsArticles[articleIndex];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-md rounded-b-4xl border-t border-b-[2px] py-8 px-6">
        {/* Header Content */}
      </header>

      <main className="relative flex flex-col items-center justify-between min-h-screen bg-gray-100 p-6">
        <div className="flex w-full space-x-4 mb-12">
          {NewsArticles.map((article, index) => (
            <div
              key={index}
              className={`bg-white rounded-md shadow-lg p-5 transition-transform duration-300 ${
                article.id === currentArticle?.id ? "translate-y-2" : ""
              }`}
              style={{ boxShadow: `${Math.abs(article.id - index) * 1}px` }}
            >
              <div className="flex justify-between items-center mb-4">
                {article.image && (
                  <img
                    src={article.image}
                    alt=""
                    className="w-20 h-16 rounded-lg"
                  />
                )}

                {article.videoSrc && (
                  <video controls loop muted>
                    <source src={article.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {article.chartImage && (
                  <img
                    src={article.chartImage}
                    alt=""
                    className="w-16 h-12 rounded-lg"
                  />
                )}
              </div>

              <h2 className="text-xl font-semibold mb-4">{article.headline}</h2>

              <p>{article.description}</p>
            </div>
          ))}
        </div>

        {/* Media Section */}

        <div className="flex justify-between w-full space-x-4 mt-10">
          <button
            onClick={handlePrevClick}
            disabled={articleIndex === 0}
            className={`text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded transition-all duration-300 ${
              articleIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>

          <span className="text-gray-600 text-sm">
            Page {articleIndex + 1} of {NewsArticles.length}
          </span>

          <button
            onClick={handleNextClick}
            disabled={articleIndex === NewsArticles.length - 1}
            className={`text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded transition-all duration-300 ${
              articleIndex === NewsArticles.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Next
          </button>
        </div>

        {/* Multimedia Section */}

        <div className="flex flex-wrap w-full space-x-4 mt-12">
          {NewsArticles.map((article, index) => (
            <div
              key={index}
              className={`bg-white rounded-md shadow-lg p-5 transition-transform duration-300 ${
                article.id === currentArticle?.id ? "translate-y-2" : ""
              }`}
              style={{ boxShadow: `${Math.abs(article.id - index) * 1}px` }}
            >
              <div className="flex space-x-4">
                {article.image && (
                  <img src={article.image} alt="" className="w-16 h-20" />
                )}

                {article.videoSrc && (
                  <video controls loop muted>
                    <source src={article.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              <h3 className="text-lg font-semibold mb-2">{article.headline}</h3>

              <p>{article.description}</p>
            </div>
          ))}
        </div>

        {/* Categories Section */}

        <section className="flex flex-col items-center space-y-4 mt-10">
          <h2 className="text-xl font-semibold">Categories</h2>

          <ul className="space-x-4 list-disc">
            {NewsArticles.map((article, index) => (
              <li key={index}>{article.headline}</li>
            ))}
          </ul>
        </section>

        {/* Footer Section */}
      </main>

      <footer className="bg-white shadow-md rounded-b-4xl border-t border-b-[2px] py-8 px-6">
        {/* Footer Content */}
      </footer>
    </div>
  );
};

export default App;
