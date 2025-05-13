const Todo = require("../models/Todo");

const getAllTodoController = async (_, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      status: 200,
      message: todos,
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};
const getTodoByUserController = async (_, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      status: 200,
      message: todos,
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const createTodoController = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const saved = await newTodo.save();
    if (!saved) {
      return res.status(400).json({
        status: 400,
        message: "Error saving todo",
      });
    }
    res.status(200).json({
      status: 200,
      message: "Todo created successfully",
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const updateTodoController = async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(400).json({
        status: 400,
        message: "Error updating todo",
      });
    }
    res.status(200).json({ status: 200, message: "Todo updated successfully" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const deleteTodoController = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

module.exports = {
  getAllTodoController,
  getTodoByUserController,
  createTodoController,
  updateTodoController,
  deleteTodoController,
};