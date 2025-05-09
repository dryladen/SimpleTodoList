const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoControllers");


// add middleware for authentication
// create 

// GET all
router.get("/", todoController.getTodos);

// POST new
router.post("/", todoController.createTodo);

// PUT update
router.put("/:id", todoController.updateTodo);

// DELETE
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
