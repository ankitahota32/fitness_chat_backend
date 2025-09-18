import Progress from "../models/progress.js";
import Workout from "../models/workout.js";
import Nutrition from "../models/nutrition.js";

export const updateProgress = async (req, res) => {
    try {
        const userId = req.user.id;

        const today = new Date();
        const start = new Date(today.setHours(0, 0, 0, 0));
        const end = new Date(today.setHours(23, 59, 59, 999));

        const workouts = await Workout.find({ user: userId, date: { $gte: start, $lte: end } });
        const nutrition = await Nutrition.find({ user: userId, date: { $gte: start, $lte: end } });

        let totalSets = 0, totalReps = 0, totalDuration = 0;
        workouts.forEach(w => {
            w.exercises.forEach(e => {
                totalSets += e.sets || 0;
                totalReps += e.reps || 0;
                totalDuration += e.duration || 0;
            });
        });

        let calories = 0, protein = 0, carbs = 0, fats = 0;
        nutrition.forEach(n => {
            calories += n.calories || 0;
            protein += n.protein || 0;
            carbs += n.carbs || 0;
            fats += n.fats || 0;
        });

        const progress = await Progress.findOneAndUpdate(
            { user: userId, date: { $gte: start, $lte: end } },
            {
                totalWorkouts: workouts.length,
                totalSets,
                totalReps,
                totalDuration,
                calories,
                protein,
                carbs,
                fats,
            },
            { upsert: true, new: true }
        );

        res.json(progress);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getProgress = async (req, res) => {
    try { 
        const progress = await Progress.find({ user: req.user.id }).sort({ date: 1 });
        res.json(progress);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
