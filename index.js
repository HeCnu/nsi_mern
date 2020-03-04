const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb://localhost/users-db", { useUnifiedTopology: true });

app.use(bodyParser.json());
app.use("/api", require("./api"));

app.listen(5000, () => {
	console.log("Server started");
});