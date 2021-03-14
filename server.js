const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// const db = mongoose.connection;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(htmlRoutes);
app.use(apiRoutes);


// routes
// app.use(require("./routes/api.js"));
// app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = app;