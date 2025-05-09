const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/todolist");
const conn = mongoose.connection;

conn.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

conn.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
app.use("/api/todos", todoRoutes);

app.listen(3001, () => console.log("Server running on port 3001"));
