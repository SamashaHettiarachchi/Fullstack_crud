const User = require('../model/userModel');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// Add a new user
const addUsers = async (req, res) => {
  const { name, email, age, address } = req.body;

  try {
    const newUser = new User({ name, email, age, address });
    await newUser.save();
    return res.status(201).json({ user: newUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to add user" });
  }
};

// Get user by ID
const getById = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email, age, address } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, age, address },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user: updatedUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to update user" });
  }
};

//delete user

const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to delete user" });
  }
};



module.exports = { getAllUsers, addUsers, getById ,updateUser,deleteUser};
