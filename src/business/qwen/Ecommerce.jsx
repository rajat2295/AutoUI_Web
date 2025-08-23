import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 29.99, image: '/path/to/image.jpg' },
    { id: 2, name: 'Product B', price: 49.99, image: '/path/to/image.jpg' },
    // Add more products here
  ]);

  const addToCart = (product) => {
    setCart([...cart.filter((p) => p.id !== product.id), product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <div className="bg-red-100 min-h-screen">
      {/* Header */}
      <header className="bg-red-700 text-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">E-commerce</h1>
        <div className="flex space-x-4">
          <button onClick={() => setCart([])} className="hover:text-white">
            Clear Cart
          </button>
          {cart.length > 0 && (
            <p className="text-blue-300">${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</p>
          )}
        </div>
      </header>

      {/* Product Catalog */}
      <section id="catalog" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Product Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={product.image}
                alt={`${product.name}'s product`}
                className="w-full h-56 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 leading-relaxed mb-2">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cart Section */}
      <section id="cart" className="container mx-auto px-4 py-16">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-white mb-8">Shopping Cart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cart.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <img
                    src={product.image}
                    alt={`${product.name}'s product`}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Remove from Cart
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Payment Section */}
            <section id="payment" className="container mx-auto px-4 py-16">
              <h3 className="text-xl font-semibold mb-2">Total: ${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</h3>
              <button
                onClick={() => alert('Payment processing...')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Checkout
              </button>
            </section>
          </>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 E-commerce Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;



// Repair -1 create a tsx file
