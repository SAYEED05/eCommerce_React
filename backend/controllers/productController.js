import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

//path to all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//path to single product by id

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

export { getProducts, getProductById };
