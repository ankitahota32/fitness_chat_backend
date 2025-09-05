import express from "express";
import { createWorkout, getWorkouts, updateWorkout, deleteWorkout } from "../controllers/workoutController.js";
import protect from "../middlewares/authMiddleware.js"

const router = express.Router();

router.post("/", protect, createWorkout);
router.get("/", protect, getWorkouts);
router.put("/:id", protect, updateWorkout);
router.delete("/:id", protect, deleteWorkout);

export default router;