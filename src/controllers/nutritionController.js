import Nutrition from "../models/nutrition.js";

export const createNutrition = async (req, res) => {
    try {
        const nutrition = new Nutrition({
            user: req.user.id,
            meal: req.body.meal,
            foodItems: req.body.foodItems,
        })
        const savedNutrition = await nutrition.save();
        res.status(201).json(savedNutrition);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getNutrition = async (req, res) => {
    try {
        const nutrition = await Nutrition.find({ user: req.user.id });
        res.json(nutrition)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateNutrition = async (req, res) => {
    try {
        const nutrition = await Nutrition.findOne({ _id: req.params.id, user: req.user.id });
        if (!nutrition) return res.status(404).json({ message: "Nutrition not found" });

        nutrition.name = req.body.name || nutrition.name;
        nutrition.foodItem = req.body.foodItem || nutrition.foodItem;
        nutrition.meal = req.body.meal || nutrition.meal;

        const updatedNutrition = await nutrition.save();
        res.json(updatedNutrition);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteNutrition = async (req, res) => {
    try { 
        const nutrition = await Nutrition.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        if (!nutrition) return res.status(404).json({ message: "Nutrition not found" });
        res.json({ message: "Nutrition deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
