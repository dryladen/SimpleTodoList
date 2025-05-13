const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoControllers");


// add middleware for authentication
// create 

// GET all
router.get("/", todoController.getAllTodoController);

// POST new
router.post("/", todoController.createTodoController);

// PUT update
router.put("/:id", todoController.updateTodoController);

// DELETE
router.delete("/:id", todoController.deleteTodoController);

module.exports = router;
