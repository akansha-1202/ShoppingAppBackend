const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const Router = require("./Routes/route");
const cors = require("cors");
// const addProducts = require("./addProducts");
const app = express();

//configure env
dotenv.config();

//database config
connectDB();

//middlewares
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api", Router);

// app.get("/home", (req, res) => {
//   res.send("Welcome To my Backend...!!!");
// });

// addProducts();

//PORT
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  try {
    console.log(`Server is running successfully on PORT ${PORT}`.bgCyan.white);
  } catch (err) {
    console.log(err, "Error occured in running the server");
  }
});
