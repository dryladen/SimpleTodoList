const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoControllers");
const { requireSingIn } = require("../controllers/authControllers");

// GET all
router.get("/", todoController.getAllTodoController);
// GET by user
router.get("/user", requireSingIn, todoController.getTodoByUserController);
// POST new
router.post("/", requireSingIn, todoController.createTodoController);
// PUT update
router.put("/:id", requireSingIn, todoController.updateTodoController);
// DELETE
router.delete("/:id", requireSingIn, todoController.deleteTodoController);

module.exports = router;
