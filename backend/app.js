const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
const cors = require("cors");

// Middleware to parse JSON
app.use(express.json());

// Route middlewar
app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);

// Connect to MongoDB and start server
mongoose
  .connect(
    "mongodb+srv://admin:nWaQilnkuSrXjXFw@cluster0.ajk3e.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => console.log(err));
