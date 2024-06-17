const mongoose = require("mongoose");

// Model for the database
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// "Product" needs to singular bc i think mongo will add an "s" at the end
const Product = mongoose.model("Product", ProductSchema);

// Once the model has been made then export it
module.exports = Product;
