const path = require("path");
const router = require("express").Router();

// home route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// stats page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// exercise page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;