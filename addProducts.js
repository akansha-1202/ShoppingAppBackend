const ProductModel = require("../backend/Schema/productModel");
const Products = require("./Constants/data");

const addProducts = async () => {
  try {
    // await Product.deleteMany({})  //for delete all objects of product collection
    await ProductModel.insertMany(Products);
    console.log("Data imported successfully");
  } catch (err) {
    console.log("Error while inserting default data", err.message);
  }
};

module.exports = addProducts;
