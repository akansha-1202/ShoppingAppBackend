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
});

const cartModel = mongoose.model("cart", cart);
module.exports = cartModel;
