import { useEffect, useState } from "react";
import axios from "axios";

function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => setProducts(res.data));
  }, []);

  const addToCart = (p) => {
    setCart([...cart, p]);
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default Products;