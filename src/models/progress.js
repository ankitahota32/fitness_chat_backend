import mongoose from "mongoose";

const ProgressSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
        date: { type: Date, default: Date.now },
        
        totalWorkouts: { type: Number, default: 0 },
        totalSets: { type: Number, default: 0 },
        totalReps: { type: Number, default: 0 },
        totalDuration: { type: Number, default: 0 },
        
        calories: { type: Number, default: 0 },
        protien: { type: Number, default: 0 },
        carbs: { type: Number, default: 0 },
        fats: {type: Number, default: 0},
    },
    {timestamps: true}
)

const Progress = mongoose.model("Progress", ProgressSchema);
export default Progress;