const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");
const authRoutes = require("./routes/auth");
const morgan = require("morgan");

mongoose.connect("mongodb://localhost:27017/todolist");
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'));
app.use("/api/todos", todoRoutes);
app.use("/api/auth", authRoutes);

const conn = mongoose.connection;
conn.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

conn.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});


app.listen(3001, () => console.log("Server running on port 3001"));
