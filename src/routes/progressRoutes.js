import express from "express";
import { getProgress, updateProgress } from "../controllers/progressController.js";
import protect from "../middlewares/authMiddleware.js"


const router = express.Router();

router.get("/", protect, getProgress);
router.post("/update", protect, updateProgress);

export default router;