import { useState } from "react";
import Cart from "./Cart";
import Catelog from "./Catelog";
import Navbar from "./Navbar";
const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const [cart, setCart] = useState([{ name: "product", price: 50 }]);

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar setShowCart={setShowCart} cartCount={cartCount} />
      <Catelog setCartCount={setCartCount} setShowCart={setShowCart} />
      {showCart && (
        <Cart cart={cart} setCart={setCart} setShowCart={setShowCart} />
      )}
    </div>
  );
};
export default App;
