import { useState } from "react";

const ProductCatalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState("Electronics");
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 99.99 },
    { id: 2, name: "Product B", price: 79.99 },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex justify-center items-center">
      {/* Header */}
      <header className="bg-red-500 p-6 text-white font-bold mb-4">
        <h1 className="text-xl">E-commerce Website</h1>
      </header>

      {/* Sidebar */}
      <aside className="bg-gray-800 overflow-hidden">
        {/* Categories */}
        <div className="flex flex-col space-y-2 p-6 bg-gray-700 mb-4">
          <h3 className="text-xl font-semibold">Categories</h3>
          {Object.keys(categoryList).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex space-x-2 px-3 py-1 rounded-lg hover:bg-gray-600 transition-colors ${
                selectedCategory === category ? "bg-blue-500" : ""
              }`}
            >
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Cart */}
        <div className="flex space-x-2 p-3 rounded-lg bg-gray-700 mb-4">
          <h3 className="text-xl font-semibold">Cart</h3>
          <p className="text-sm text-gray-600">
            {cartItems.length > 0
              ? "Total Price: $99.99"
              : "Your Cart is Empty"}
          </p>
        </div>

        {/* Payments */}
        <div className="flex space-x-2 p-3 rounded-lg bg-gray-700 mb-4">
          <h3 className="text-xl font-semibold">Payments</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Secure Payment Gateway</li>
            <li>24/7 Customer Support</li>
            <li>Delivery Within 1-2 Business Days</li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 p-6 text-white font-bold mb-4">
          <p>&copy; 2023 E-commerce Website. All rights reserved.</p>
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        {selectedCategory === "Electronics" && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <h2 className="text-xl font-semibold mb-4">Electronics</h2>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Product A</li>
              <li>Product B</li>
              <li>Product C</li>
            </ul>
          </div>
        )}
        {selectedCategory === "Clothing" && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <h2 className="text-xl font-semibold mb-4">Clothing</h2>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Product A</li>
              <li>Product B</li>
              <li>Product C</li>
            </ul>
          </div>
        )}
        {selectedCategory === "Home_Appliances" && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <h2 className="text-xl font-semibold mb-4">Home Appliances</h2>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Product A</li>
              <li>Product B</li>
              <li>Product C</li>
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

const categoryList = {
  Electronics: [
    { id: 1, name: "Laptop", price: 399.99 },
    { id: 2, name: "Smartphone", price: 899.99 },
    { id: 3, name: "Tablet", price: 149.99 },
  ],
  Clothing: [
    { id: 4, name: "Jeans", price: 59.99 },
    { id: 5, name: "Dresser", price: 79.99 },
    { id: 6, name: "T-Shirt", price: 29.99 },
  ],
  Home_Appliances: [
    { id: 7, name: "Smartphone Charger", price: 199.99 },
    { id: 8, name: "Plasma Screen", price: 599.99 },
    { id: 9, name: "Microwave Oven", price: 499.99 },
  ],
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Electronics");

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex justify-center items-center">
      <header className="bg-red-500 p-6 text-white font-bold mb-4">
        <h1>E-commerce Website</h1>
      </header>

      {/* Sidebar */}
      <aside className="bg-gray-800 overflow-hidden">
        <div className="flex flex-col space-y-2 p-6 bg-gray-700 mb-4">
          <h3 className="text-xl font-semibold">Categories</h3>
          {Object.keys(categoryList).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex space-x-2 px-3 py-1 rounded-lg hover:bg-gray-600 transition-colors ${
                selectedCategory === category ? "bg-blue-500" : ""
              }`}
            >
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Cart */}
        <div className="flex space-x-2 p-3 rounded-lg bg-gray-700 mb-4">
          <h3 className="text-xl font-semibold">Cart</h3>
          <p className="text-sm text-gray-600">
            {cartItems.length > 0
              ? "Total Price: $99.99"
              : "Your Cart is Empty"}
          </p>
        </div>

        {/* Payments */}
        <div className="flex space-x-2 p-3 rounded-lg bg-gray-700 mb-4">
          <h3 className="text-xl font-semibold">Payments</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Secure Payment Gateway</li>
            <li>24/7 Customer Support</li>
            <li>Delivery Within 1-2 Business Days</li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 p-6 text-white font-bold mb-4">
          <p>&copy; 2023 E-commerce Website. All rights reserved.</p>
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        {selectedCategory === "Electronics" && <ProductCatalogue />}
        {selectedCategory === "Clothing" && <ProductCatalogue />}
        {selectedCategory === "Home_Appliances" && <ProductCatalogue />}
      </main>
    </div>
  );
};

export default App;
