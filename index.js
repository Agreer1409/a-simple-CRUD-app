
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
require('dotenv').config()
const app = express();

// Middleware
app.use(express.json()); // Need to have this to accept JSON structures
app.use(express.urlencoded({ extended: false })); // to accept form structures

// Routes
app.use("/api/products", productRoute);

// Whatever the client send to the server is the req (request).
// What the server sends back is the res (response)
// '/' is the default page (localhost:3000 so basically running locally)
app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated"); // the response from the Node API
});

// Connect to the database
mongoose
  .connect(
    process.env.MONGO_URI_KEY
  )
  .then(() => {
    console.log("Connected to database!");

    // listening on Port 3000
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed :( ");
  });
