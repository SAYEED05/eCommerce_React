import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

//path to all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// GET A SINGLE PRODUCT BY ID

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

//DELETE A PRODUCT (ADMIN ONLY)

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    // if(req.user._id===product.user._id){await product.remove()} USE THIS TO MAKE ONLY THE ADMIN WHO CREATED THE PRODUCT CAN DELETE IT
    await product.remove();
    res.json({ message: "product removed" });
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

export { getProducts, getProductById, deleteProduct };
