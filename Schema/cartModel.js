const mongoose = require("mongoose");

const cart = mongoose.Schema({
  user_id: {
    type: String,
    require: true,
  },
  data: {
    type: Object,
    required: true,
  },
},{timestamps : true});//for timing in which user added the cart

const cartModel = mongoose.model("cart", cart);
module.exports = cartModel;
