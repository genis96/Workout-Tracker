const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));
app.use(express.urlencoded({extended: true}))

// Mongoose connection syntax //
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`Success! App is running on port ${PORT}!`);
});