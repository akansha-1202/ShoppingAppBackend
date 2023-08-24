const { register, login } = require("../Controller/userController")
const { getProducts, getSingleProductById, getProductsByFilter} = require("../Controller/productController");
const {addToCart, fetchUserCart} = require("../Controller/cartController");
const auth = require("../Middleware/auth");
const Router = require("express").Router()

Router.post('/register',register)
Router.post('/login',login);
Router.get("/products", getProducts);
Router.get("/products/:brand", getProductsByFilter);

Router.get("/product/:id", getSingleProductById);
Router.post("/addToCart/:product_id",addToCart);
Router.get("/fetchUserCart/:user_id",fetchUserCart)



module.exports = Router