import React, { useState } from "react";

const DirectoryListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const newReview = searchTerm.trim();
    setReviews([...reviews, newReview]);
    setSearchTerm("");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Directory Listing</h1>
      </header>
      <main className="p-4">
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Search Bar</h2>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Reviews</h2>
          <ul>
            {reviews.map((review, index) => (
              <li
                key={index}
                className="p-2 border border-gray-300 rounded-lg mb-2"
              >
                {review}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Add Review</h2>
          <form
            onSubmit={handleReviewSubmit}
            className="p-2 border border-gray-300 rounded-lg"
          >
            <textarea
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows={3}
            />
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <footer className="bg-gray-200 text-center p-4">
        <p>&copy; 2023 Directory Listing</p>
      </footer>
    </div>
  );
};

export default DirectoryListing;
