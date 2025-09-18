import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import workoutRouters from "./routes/workoutRoutes.js";
import nutritionRoutes from "./routes/nutritionRoutes.js"
import progressRoutes from "./routes/progressRoutes.js"

dotenv.config();
connectDB();


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/workout", workoutRouters);
app.use("/api/nutrition", nutritionRoutes)
app.use("/api/progress", progressRoutes);

app.get("/", (req, res) => {
    res.send("Fitness chat bot API is running...");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
