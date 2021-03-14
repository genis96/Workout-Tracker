const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));
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

app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

app.listen(PORT, () => {
    console.log(`Success! App is running on port ${PORT}!`);
});