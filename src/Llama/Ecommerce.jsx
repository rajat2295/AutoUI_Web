import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Samsung',
    price: '$1499',
    image:
      'https://cdn.shopify.com/s/files/1/0573/0854/products/phone_iphonesamsunggalaxys21ultrasettingscreen_2x.jpg?v=1638541568'
  },
  {
    id: 2,
    name: 'Apple',
    price: '$1799',
    image:
      'https://cdn.shopify.com/s/files/1/0573/0854/products/phone_iphonesamsunggalaxys21ultrasettingscreen_2x.jpg?v=1638541568'
  },
  {
    id: 3,
    name: 'Xiaomi',
    price: '$1299',
    image:
      'https://cdn.shopify.com/s/files/1/0573/0854/products/phone_iphonesamsunggalaxys21ultrasettingscreen_2x.jpg?v=1638541568'
  }
];

const Cart = ({ cartItems, updateCart }) => {
  return (
    <div className="flex flex-col">
      {cartItems.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
      Total: $100
    </div>
  );
};

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Checkout</h1>

      <form action="" method="POST">
        <label htmlFor="payment-method" className="mb-2 block text-sm font-medium text-gray-700">
          Choose your payment method:
        </label>
        <div className="relative">
          <select
            id="payment-method"
            name="payment-method"
            onChange={e => setPaymentMethod(e.target.value)}
            value={paymentMethod}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select...</option>
            <option value="credit">Credit</option>
            <option value="debit">Debit Card</option>
          </select>

          <div className="absolute top-0 right-0">
            <button
              type="submit"
              onClick={() => navigate('/cart')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md"
            >
              Proceed to Cart
            </button>
          </div>
        </div>
      </form>

      <Link to="/about">
        <button className="btn bg-green-400 mt-6 p-2 rounded-sm">Continue</button>
      </Link>
    </>
  );
};

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const updateCart = id => {
    setCartItems([...cartItems, { id: 1 }]);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="fixed top-0 z-50 bg-white shadow-md w-full py-3 px-4">
        <nav className="container mx-auto flex justify-between items-center py-2">
          <Link to="/" className="text-gray-800 text-sm font-semibold hover:text-blue-600">
            Home
          </Link>
          <div className="flex space-x-6">
            <button className="bg-green-400 hover:bg-green-500 rounded-md px-4 py-1 text-white font-bold shadow-md">
              Login
            </button>
            <button className="bg-red-400 hover:bg-red-600 rounded-md px-4 py-1 text-white font-bold shadow-md">
              Sign up
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto flex-grow pt-16 pb-12">
        <section className="flex justify-center items-center h-full">
          <div className="bg-gray-100 border border-gray-400 rounded-xl shadow-md p-6 w-4/5 max-w-sm">
            <h1 className="text-gray-900 font-semibold text-xl mb-2">E-commerce Website</h1>
            {products.map(product => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div
                  className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center w-full max-w-sm"
                  onClick={() => updateCart(product.id)}
                >
                  <img src={'/image.jpeg'} alt={product.name} className="w-48" />
                  <h1 className="text-gray-800 font-medium text-xl mt-2 ml-2">
                    {product.name}
                  </h1>
                  <p className="text-gray-600 text-sm">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          <Cart cartItems={cartItems} updateCart={updateCart} />
        </section>
      </main>

      <footer className="fixed bottom-0 z-50 bg-white shadow-md p-6 w-full flex justify-center items-center">
        <span>© 2022 All rights reserved</span>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Home />
      <Checkout />
    </>
  );
};
export default App;