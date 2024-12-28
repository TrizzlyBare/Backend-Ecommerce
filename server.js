import express from "express";
import cors from "cors";
import "dotenv/config";
// import authRoutes from "./routes/auth.js";
// import protectedRoute from "./routes/protectedRoute.js";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

//Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
