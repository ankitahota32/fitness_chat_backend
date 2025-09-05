import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        age: Number,
        gender: {
            type: String,
            enum: ["male", "female", "other"],
        },
        height: Number,
        weight: Number,
        fitnessGoal: {
            type: String
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;