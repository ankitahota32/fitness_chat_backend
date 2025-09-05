import mongoose from "mongoose";

const nutritionSchema = mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId },
        meal: { type: String, required: true },
        foodItems: [{ type: String }],
        calories: { type: Number },
        protein: { type: Number },
        carbs: { type: Number },
        fats: { type: Number },
        date: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const Nutrition = mongoose.model("Nutrition", nutritionSchema);
export default Nutrition;