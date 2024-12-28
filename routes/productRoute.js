import express from "express";
import {
  addProduct,
  deleteProduct,
  listProducts,
  singleProduct,
  updateProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/add", addProduct);
productRouter.delete("/remove", deleteProduct);
productRouter.get("/list", listProducts);
productRouter.get("/single", singleProduct);
productRouter.put("/update", updateProduct);

export default productRouter;
