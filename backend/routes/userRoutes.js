const express = require("express");
const router = express.Router();
const user = require("../model/userModel");

const userController = require("../controllers/userContrallers");

router.get("/", userController.getAllUsers);
router.post("/", userController.addUsers);
router.get("/:id", userController.getById); // Get all users
router.put("/:id", userController.updateUser); // Update user by ID
router.delete("/:id", userController.deleteUser); // Delete user by ID

module.exports = router; // Export the router
