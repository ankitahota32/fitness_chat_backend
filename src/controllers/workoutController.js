import Workout from "../models/workout.js";

export const createWorkout = async (req, res) => {
    try {
        const workout = new Workout({
            user: req.user.id,
            name: req.body.name,
            exercises: req.body.exercises,
        });
        const savedWorkout = await workout.save();
        res.status(201).json(savedWorkout);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({ user: req.user.id });
        res.json(workouts)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const updateWorkout = async (req, res) => {
    try {
        const workout = await Workout.findOne({ _id: req.params.id, user: req.user.id });
        if (!workout) return res.status(404).json({ message: "Workout not found" });

        workout.name = req.body.name || workout.name;
        workout.exercises = req.body.exercises || workout.exercises;

        const updatedWorkout = await workout.save();
        res.json(updatedWorkout);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteWorkout = async (req, res) => {
    try {
        const workout = await Workout.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        if (!workout) return res.status(404).json({ message: "Workout not found" });
        res.json({ message: "Workout deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}