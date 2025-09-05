import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    sets: { type: Number },
    reps: { type: Number },
    duration: { types: Number }
});

const workoutSchema = mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        name: { type: String, required: true },
        execises: [exerciseSchema],
        date: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const Workout = mongoose.model("Workout", workoutSchema);
export default Workout;