const productModel = require("../Schema/productModel");
const cartModel = require("../Schema/cartModel");

const addToCart = async (req, res) => {
  const { user_id } = req.body;
  const _id = req.params.product_id;
  const data = await productModel.find({ id: _id });
  console.log(data);
  const result = await cartModel.create({
    user_id,
    data,
  });
  return res.send({ message: "product added to the cart", result: result });
};

const fetchUserCart = async (req, res) => {
  const user_id = req.params.user_id;
  const user = await cartModel.find({ user_id: user_id });
  return res.send(user);
};

// const checkOut = async(req, res) =>{

// }
module.exports = { addToCart, fetchUserCart };
// /addToCart/:product_id
// /fetchUserCart/:user_id
