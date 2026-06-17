import { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import VendorDashboard from "./components/VendorDashboard";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <h1>🛒 E-Commerce</h1>
      <VendorDashboard />
      <Products cart={cart} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;