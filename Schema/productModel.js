const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  category:String,
  brand:String,
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  rating:Number,
  description: String,
  discount: String,
  // tagline: String,
});

const productModel = mongoose.model("Products", productSchema);

module.exports =  productModel;
