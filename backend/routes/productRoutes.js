import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

//path to all products
router.route("/").get(getProducts);

//path to single product by id
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct);

export default router;
