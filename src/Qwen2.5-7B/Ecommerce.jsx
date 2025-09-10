import { useState } from "react";

const ProductCatalog = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 499 },
    { id: 3, name: "Tablet", price: 299 },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Product Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src="./image.jpeg"
              alt={product.name}
              className="w-full h-36 object-cover mb-4"
            />
            <h3 className="text-gray-800 font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="list-disc pl-5">
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button
                onClick={() => removeFromCart(index)}
                className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const PaymentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment submitted!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Card Number:
          </label>
          <input
            type="text"
            id="cardNumber"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your card number"
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              htmlFor="expiryDate"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Expiry Date:
            </label>
            <input
              type="text"
              id="expiryDate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="MM/DD/YYYY"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              htmlFor="cvv"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              CVV:
            </label>
            <input
              type="password"
              id="cvv"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter CVV"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-commerce Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Checkout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 E-commerce Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="py-8">
        <section>
          <ProductCatalog />
        </section>
        <section>
          <ShoppingCart />
        </section>
        <section>
          <PaymentForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
