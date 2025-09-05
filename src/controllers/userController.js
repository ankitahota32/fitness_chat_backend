import User from "../models/user.js";

export const getProfile = async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.gender = req.body.gender || user.gender;
        user.height = req.body.height || user.height;
        user.weight = req.body.weight || user.weight;
        user.fitnessGoal = req.body.fitnessGoal || user.fitnessGoal;

        const updatedUser = await user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            age: updatedUser.age,
            gender: updatedUser.gender,
            height: updatedUser.height,
            weight: updatedUser.weight,
            fitnessGoal: updatedUser.fitnessGoal,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};