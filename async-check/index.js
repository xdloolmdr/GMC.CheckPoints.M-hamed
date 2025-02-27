require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const fetch = require("node-fetch");

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const User = mongoose.model("User", userSchema);

// GET: Return all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Add a new user
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Edit a user by ID
app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Remove a user by ID
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Task 01: Iterating with Async/Await
const iterateWithAsyncAwait = async (arr) => {
  for (const item of arr) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(item);
  }
};

// Task 03: Handling Errors with Async/Await
const awaitCall = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

// Task 04: Awaiting Concurrent Requests
const concurrentRequests = async () => {
  try {
    const [res1, res2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
        res.json()
      ),
    ]);
    console.log("Concurrent Results:", res1, res2);
  } catch (error) {
    console.error("Error in concurrent requests:", error.message);
  }
};

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = { app, iterateWithAsyncAwait, awaitCall, concurrentRequests };
