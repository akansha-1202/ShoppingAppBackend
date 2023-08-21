const { register, login } = require("../Controller/userController")
const { getProducts, getSingleProductById } = require("../Controller/productController");
const {addToCart, fetchUserCart} = require("../Controller/cartController")
const Router = require("express").Router()

Router.post('/register',register)
Router.post('/login',login);
Router.get("/products", getProducts);
Router.get("/product/:id", getSingleProductById);
Router.post("/addToCart/:product_id",addToCart);
Router.get("/fetchUserCart/:user_id",fetchUserCart)



module.exports = Router