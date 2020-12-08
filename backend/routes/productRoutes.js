import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

//path to all products
router.route("/").get(getProducts);

//path to single product by id
router.route("/:id").get(getProductById);

export default router;
