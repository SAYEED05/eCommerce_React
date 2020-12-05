import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
connectDB();
const app = express();

//root path
app.get("/", (req, res) => {
  res.send("server is running now");
});

app.use("/api/products", productRoutes);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server started at ${PORT} in ${process.env.NODE_ENV} mode`)
);
