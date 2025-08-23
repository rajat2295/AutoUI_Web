// import './App.css';
import { useState } from "react";

function Listing({ name, price, image, onAddToCart }) {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt="Listing" className="w-24 h-24 object-cover mb-4" />
      <h3>{name}</h3>
      <p>${price}</p>
      <button
        onClick={() => onAddToCart()}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
}

function Search() {
  const [query, setQuery] = useState("");
  return (
    <div className="flex flex-col items-center mt-8">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 mb-6"
      />
    </div>
  );
}

function Reviews({ reviews }) {
  return (
    <div className="mt-8">
      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <div
          key={index}
          className={`flex flex-col items-center ${
            index % 2 === 0 ? "mb-6" : ""
          }`}
        >
          <div className="bg-gray-100 p-4 rounded-lg">
            <p>{review}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  const listings = [
    { name: "Item 1", price: 9.99, image: "./image.jpeg" },
    { name: "Item 2", price: 4.99, image: "./image.jpeg" },
    { name: "Item 3", price: 7.99, image: "./image.jpeg" },
    // Add more listings as needed
  ];

  const reviews = [
    "Great product!",
    "Excellent value for money.",
    "Highly recommend it.",
    // Add more reviews as needed
  ];

  const onAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Listing Website</h1>
      <Search />
      {listings.map((listing, index) => (
        <Listing
          key={index}
          name={listing.name}
          price={listing.price}
          image={listing.image}
          onAddToCart={() => onAddToCart(listing)}
        />
      ))}
      <Reviews reviews={reviews} />
      <h2 className="text-xl font-bold mt-8">Shopping Cart</h2>
      <ul className="list-disc list-inside">
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
