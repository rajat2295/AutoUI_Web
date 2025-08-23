// import React from 'react';
// import { useState } from 'react';
// import './App.css';

// const App = () => {
// const [searchTerm, setSearchTerm] = useState('');

// const handleSearch = (e) => {
// e.preventDefault();
// if(searchTerm.length > 0){
// // Fetch data from backend
// // ...
// }
// }

// return (
// <div className="flex flex-col min-h-screen bg-blue-50">
// {/* Header Section */}
// <header className="bg-gray-900 text-white p-4 border-b border-gray-800">
// <h1 className="text-xl font-bold">Directory Listing</h1>
// <form onSubmit={handleSearch}>
// <input
// type="text"
// placeholder="Search..."
// value={searchTerm}
// onChange={(e) => setSearchTerm(e.target.value)}
// className="px-4 py-2 border border-gray-700 rounded-full w-full focus:outline-none focus:border-blue-500"
// />
// </form>
// </header>

// {/* Main Section */}
// <main className="flex-grow p-4">
// {/* Listing Section */}
// <section className="flex flex-wrap justify-between gap-4 md:flex-col">
// {data?.map((item) => (
// <div
// key={item.id}
// className="p-4 border bg-gray-200 rounded-md shadow-lg w-full h-fit mb-6"
// >
// {/* Card */}
// <div className="bg-blue-500 p-4 rounded-lg">
// <h3 className="text-xl font-semibold text-white">{item?.title}</h3>
// <p className="mt-2 text-gray-700 text-sm">Last updated: {item?.updatedAt}</p>
// {/* Rating */}
// <div className="flex justify-between items-center mt-4">
// <span>Rating:</span>
// <svg
// xmlns="http://www.w3.org/2000/svg"
// width="16"
// height="16"
// viewBox="0 0 16 16"
// className="fill-current text-yellow-500 mr-2"
// >
// <path d="M15.79 8l.34-1H0v2h15v-1.5c-.2-.6-.6-1.1-1.1-1.5L15 5V0h-2c-.6 0-.9.3-.8.7L5.35 6h4.5z"/>
// </svg>
// </div>
// </div>
// </div>
// ))}
// </section>

// {/* Search Results */}
// {searchResults.length > 0 && (
// <div className="p-4 rounded-md bg-blue-100">
// <h2 className="text-lg font-bold mb-2">Search Results:</h2>
// <ul>
// {searchResults.map((result) => (
// <li key={result.id} className="flex items-center gap-2 p-2 border-b border-gray-800 bg-white rounded-md">
// <div className="w-16 h-16 rounded-full bg-red-500" />
// <span>{result.title}</span>
// </li>
// ))}
// </ul>
// </div>
// )}

// {/* Reviews Section */}
// {reviews.length > 0 && (
// <section className="flex flex-col items-center gap-4 p-4">
// <h2 className="text-xl font-bold mb-2">Reviews:</h2>

// {/* Single Review */}
// <div
// key={reviews[0].id}
// className="p-4 border bg-gray-200 rounded-md shadow-lg w-full h-fit mb-6"
// >
// <div className="flex flex-col items-center">
// <img src='./image.jpeg' alt='reviewer' className="w-16 h-16 rounded-lg" />
// <h3 className="mt-4 font-bold text-gray-800">Reviewer: Jane Doe</h3>
// <p className="text-gray-500 mt-2">{reviews[0].title}</p>

// {/* Rating */}
// <div className="flex justify-between items-center mt-4">
// <span>Rating:</span>
// <svg
// xmlns="http://www.w3.org/2000/svg"
// width="16"
// height="16"
// viewBox="0 0 16 16"
// className="fill-current text-yellow-500 mr-2"
// >
// <path d="M15.79 8l.34-1H0v2h15v-1.5c-.2-.6-.6-1.1-1.1-1.5L15 5V0h-2c-.6 0-.9.3-.8.7L5.35 6h4.5z"/>
// </svg>
// </div>

// {/* Review Content */}
// <p className="mt-4">{reviews[0].content}</p>
// </div>
// </div>

// {reviews.length > 1 && (
// <ul>
// {reviews.slice(1).map((review) => (
// <li key={review.id} className="flex items-center gap-2 p-2 border-b border-gray-800 bg-white rounded-md">
// <div className="w-16 h-16 rounded-full" />
// <span>{review.title}</span>
// </li>
// ))}
// </ul>
// )}
// </section>
// )}

// {/* Footer Section */}
// </main>

// {/* Footer Section */}
// <footer className="bg-gray-900 text-white p-4 border-t border-gray-800">
// <p>© 2023 Directory Listing. All rights reserved.</p>
// </footer>
// </div>
// )
// }

// export default App;

// // V1 Buggy code with no sample data

import React,{useState} from 'react';
import './App.css';

const data = [
  {
    id: 1,
    title: "Listing Title 1",
    createdAt: "2023-09-15T16:40Z",
    updatedAt: "2023-09-15T16:40Z",
  },
  {
    id: 2,
    title: "Listing Title 2",
    createdAt: "2023-09-15T17:00Z",
    updatedAt: "2023-09-15T17:00Z",
  },
];

const reviews = [
  {
    id: 1,
    title: "Great Experience!",
    content: "The service was excellent, friendly staff, and the food was delicious.",
  },
  {
    id: 2,
    title: "Very tasty!",
    content: "I ordered a vegan pizza and it was well cooked. Highly recommended",
  }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    if(searchTerm.length > 0){
      // Fetch data from backend
      // ...
    }
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      {/* Header Section */}
      <header className="bg-gray-900 text-white p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">Directory Listing</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-700 rounded-full w-full focus:outline-none focus:border-blue-500"
          />
        </form>
      </header>

      {/* Main Section */}
      <main className="flex-grow p-4">
        {/* Listing Section */}
        <section className="flex flex-wrap justify-between gap-4 md:flex-col">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-4 border bg-gray-200 rounded-md shadow-lg w-full h-fit mb-6"
            >
              {/* Card */}
              <div className="bg-blue-500 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-700 text-sm">Last updated: {item.updatedAt}</p>
                {/* Rating */}
                <div className="flex justify-between items-center mt-4">
                  <span>Rating:</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="fill-current text-yellow-500 mr-2"
                  >
                    <path d="M15.79 8l.34-1H0v2h15v-1.5c-.2-.6-.6-1.1-1.1-1.5L15 5V0h-2c-.6 0-.9.3-.8.7L5.35 6h4.5z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Search Results */}
        {false && searchResults?.length > 0 && (
          <div className="p-4 rounded-md bg-blue-100">
            <h2 className="text-lg font-bold mb-2">Search Results:</h2>
            <ul>
              {searchResults.map((result) => (
                <li key={result.id} className="flex items-center gap-2 p-2 border-b border-gray-800 bg-white rounded-md">
                  <div className="w-16 h-16 rounded-full bg-red-500" />
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Reviews Section */}
        {reviews.length > 0 && (
          <section className="flex flex-col items-center gap-4 p-4">
            <h2 className="text-xl font-bold mb-2">Reviews:</h2>

            {/* Single Review */}
            <div
              key={reviews[0].id}
              className="p-4 border bg-gray-200 rounded-md shadow-lg w-full h-fit mb-6"
            >
              <div className="flex flex-col items-center">
                <img src='./image.jpeg' alt='reviewer' className="w-16 h-16 rounded-lg" />
                <h3 className="mt-4 font-bold text-gray-800">Reviewer: Jane Doe</h3>
                <p className="text-gray-500 mt-2">{reviews[0].title}</p>

                {/* Rating */}
                <div className="flex justify-between items-center mt-4">
                  <span>Rating:</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="fill-current text-yellow-500 mr-2"
                  >
                    <path d="M15.79 8l.34-1H0v2h15v-1.5c-.2-.6-.6-1.1-1.1-1.5L15 5V0h-2c-.6 0-.9.3-.8.7L5.35 6h4.5z"/>
                  </svg>
                </div>

                {/* Review Content */}
                <p className="mt-4">{reviews[0].content}</p>
              </div>
            </div>

            {reviews.length > 1 && (
              <ul>
                {reviews.slice(1).map((review) => (
                  <li key={review.id} className="flex items-center gap-2 p-2 border-b border-gray-800 bg-white rounded-md">
                    <div className="w-16 h-16 rounded-full" />
                    <span>{review.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {/* Footer Section */}
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white p-4 border-t border-gray-800">
        <p>© 2023 Directory Listing. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App