import { useState } from "react";
import axios from "axios";

function VendorDashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = async () => {
    await axios.post("http://localhost:5000/products", {
      name,
      price
    });
    alert("Product Added!");
  };

  return (
    <div>
      <h2>Vendor Dashboard</h2>
      <input placeholder="Product Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default VendorDashboard;