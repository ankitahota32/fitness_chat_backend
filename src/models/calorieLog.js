import mongoose from "mongoose";

const calorieLogSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        foodItem: {
            type: String,
            required: true,
        },
        calories: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const CalorieLog = mongoose.model("CalorieLog", calorieLogSchema);
export default CalorieLog;