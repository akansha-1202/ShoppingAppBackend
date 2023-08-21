const productModel = require("../Schema/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while getting all categories",
      error,
    });
  }
};

const getSingleProductById = async (req, res) => {
  try {
    const product = await productModel.findOne({ id: req.params.id });
    res.json(product);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while getting a category",
      error,
    });
  }
};


const getProductsByFilter = async(req,res)=>{
  try{
    const brand = req.params.brand;
 const product = await productModel.find({ brand: brand });
    res.send(product);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while getting a category",
      error,
    });
  }
}

module.exports = {
  getProducts,
  getSingleProductById,
  getProductsByFilter
};
