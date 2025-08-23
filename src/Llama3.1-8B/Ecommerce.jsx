import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: "$10.00" },
    { id: 2, name: "Product 2", price: "$20.00" },
    { id: 3, name: "Product 3", price: "$30.00" },
  ]);
  const [cart, setCart] = useState([]);
  const [payment, setPayment] = useState("");

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handlePayment = (paymentMethod) => {
    setPayment(paymentMethod);
  };

  const total = cart.reduce(
    (acc, cur) => acc + parseInt(cur.price.replace("$", "")),
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">E-commerce Website</h1>
          <div className="flex space-x-4">
            <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Cart ({cart.length})
            </button>
            <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <aside className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Products</h2>
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <span className="text-gray-500">{product.price}</span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </aside>
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            {cart.map((item) => (
              <div key={item.id} className="bg-gray-200 p-4 rounded-lg mb-4">
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="text-gray-500">{item.price}</span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600">
                  Remove from Cart
                </button>
              </div>
            ))}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Total: ${total}</h3>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Payment</h2>
            <div className="flex flex-col">
              <label className="mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  onChange={(e) => handlePayment(e.target.value)}
                  checked={payment === "cash"}
                  className="mr-2"
                />
                Cash
              </label>
              <label className="mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="credit card"
                  onChange={(e) => handlePayment(e.target.value)}
                  checked={payment === "credit card"}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label className="mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  onChange={(e) => handlePayment(e.target.value)}
                  checked={payment === "paypal"}
                  className="mr-2"
                />
                PayPal
              </label>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">© 2023 E-commerce Website</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
