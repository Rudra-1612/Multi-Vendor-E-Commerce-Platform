import axios from "axios";

function Cart({ cart, setCart }) {

  const checkout = async () => {
    await axios.post("http://localhost:5000/order", { cart });
    alert("Order Placed!");
    setCart([]);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, i) => (
        <div key={i}>{item.name} - ₹{item.price}</div>
      ))}
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default Cart;