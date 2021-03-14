const router = require("express").Router();
const Workout = require("../models").Workout;

// GET - REQ FOR WORKOUTS
router.get("/api/workouts", (req, res) => {
    Workout.find()
})

//PUT - UPDATES WORKOUTS

//POST - CREATING WORKOUTS

//GET FOR RANGE IN WORKOUTS

module.exports = router;