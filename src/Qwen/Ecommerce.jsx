
import React,{useState} from 'react';
const ProductCard = ({ product }) => {
  return (
    <div className="w-full p-4 bg-white border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
      <img
        src={product.image}
        alt={product.name}
        className="h-36 w-full object-cover mb-4"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-700">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-col space-y-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const CartItem = ({ item, onRemove }) => {
  return (
    <li className="flex items-center justify-between py-2 px-4 bg-gray-100">
      <div className="flex space-x-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-8 h-8 object-cover rounded"
        />
        <span>{item.name}</span>
      </div>
      <span>${item.price.toFixed(2)}</span>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </li>
  );
};

const Cart = ({ cart, onRemove }) => {
  return (
    <ul className="space-y-4">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
      <div className="flex justify-between text-lg font-semibold">
        <span>Total:</span>
        <span>${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
      </div>
    </ul>
  );
};

const CheckoutForm = ({ onPlaceOrder }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
      />
      <button
        type="submit"
        onClick={() => onPlaceOrder(name, email)}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Place Order
      </button>
    </form>
  );
};

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-xl font-semibold">Login</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto text-center">© 2023 E-commerce Website</div>
    </footer>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product A', price: 9.99, image: './image.jpeg' },
    { id: 2, name: 'Product B', price: 14.99, image: './image.jpeg' },
    { id: 3, name: 'Product C', price: 8.99, image: './image.jpeg' },
    // Add more products as needed
  ];

  const addItem = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      setCart([...cart, { ...product }]);
    }
  };

  const removeItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const onPlaceOrder = (name, email) => {
    // Handle order placing logic here
    console.log(`Order placed by ${name} with email ${email}`);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 space-y-2">
        <h1 className="text-lg font-bold">E-commerce Website</h1>
      </header>
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-4">
          {/* Product List */}
          <div className="mb-8">
            <ProductList products={products} />
          </div>
          {/* Cart Section */}
          <section className="bg-gray-200 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Cart</h2>
            {cart.length > 0 ? (
              <Cart cart={cart} onRemove={removeItem} />
            ) : (
              <p className="text-gray-700">Your cart is empty.</p>
            )}
          </section>
          {/* Login Form */}
          <LoginForm />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

// V1 repair errors
// V2 missing import, but fixed design
// functionality add cart not working