import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
connectDB();
const app = express();

app.use(express.json());

//root path
app.get("/", (req, res) => {
  res.send("server is running now");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server started at ${PORT} in ${process.env.NODE_ENV} mode`)
);
