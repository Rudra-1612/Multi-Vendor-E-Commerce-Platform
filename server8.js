const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Shirt", price: 500, vendor: "A" },
  { id: 2, name: "Shoes", price: 1200, vendor: "B" }
];

let orders = [];

// Get products
app.get("/products", (req, res) => {
  res.json(products);
});

// Add product (Vendor)
app.post("/products", (req, res) => {
  const product = { id: Date.now(), ...req.body };
  products.push(product);
  res.json(product);
});

// Place order
app.post("/order", (req, res) => {
  const order = { id: Date.now(), ...req.body };
  orders.push(order);
  res.json(order);
});

// Get orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(5000, () => console.log("Server running on 5000"));