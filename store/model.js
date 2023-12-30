const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Product Name cannot be null"] },
  price: {
    type: String,
    required: [true, "Prouct price cannot be null"],
  },
  image: {
    type: String,
    required: [true, "Product image cannot be null"],
  },
  stock: {
    type: Number,
    default: 1,
  },
}, {
  timestamps: true,
});

module.exports =
  mongoose.models.product || mongoose.model("product", ProductSchema);
