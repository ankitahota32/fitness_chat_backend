import express from "express";
import { createNutrition, getNutrition, updateNutrition, deleteNutrition } from "../controllers/nutritionController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createNutrition);
router.get("/", protect, getNutrition);
router.put("/:id", protect, updateNutrition);
router.delete("/:id", protect, deleteNutrition);

export default router;