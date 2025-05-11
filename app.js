const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Route middleware
app.use(express.json());
app.use("/users", userRoutes);


// Connect to MongoDB and start server
mongoose.connect("mongodb+srv://admin:nWaQilnkuSrXjXFw@cluster0.ajk3e.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(err => console.log(err));
