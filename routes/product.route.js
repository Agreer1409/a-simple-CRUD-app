const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// GET obtains something in the database
router.get("/", getProducts); // Get everything in the database
router.get("/:id", getProduct); // Get only one thing from the database

// POST Sends stuff to the database (create)
router.post("/", createProduct); // This is creating a new entry into the database

// Update a Product
router.put("/:id", updateProduct);

// Delete a Product
router.delete("/:id", deleteProduct);

module.exports = router;