const Workout = require("../models/workout");
const router = require("express").Router();

// GET - REQ FOR WORKOUTS PAGE
router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

//PUT - UPDATES WORKOUTS
router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
        { _id: req.params.id }, //specified id
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        }, 
        { new: true }
    ).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

//POST - CREATING WORKOUTS
router.post("/api/workouts", (req, res) => {
    Workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

//GET FOR RANGE IN WORKOUTS
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration",
            },
          },
        },
        { $sort: { day: -1 } },
        { $limit: 7 },
        { $sort: { day: 1 } },
      ]).exec();
});

module.exports = router;