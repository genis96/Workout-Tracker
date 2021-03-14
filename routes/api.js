const Workout = require("../models/workout");
const router = require("express").Router();

// GET - REQ FOR WORKOUTS
router.get("/api/workouts", (req, res) => {
    Workout.find()
})

//PUT - UPDATES WORKOUTS

//POST - CREATING WORKOUTS

//GET FOR RANGE IN WORKOUTS

module.exports = router;