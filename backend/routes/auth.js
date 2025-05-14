const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const { requireSingIn } = require("../controllers/authControllers");

// add middleware for authentication

// POST register
router.post("/register", authControllers.registerController);

// POST login
router.post("/login", authControllers.loginController);

// PUT update user
router.put("/update-user", requireSingIn, authControllers.updateUserController);

module.exports = router;
