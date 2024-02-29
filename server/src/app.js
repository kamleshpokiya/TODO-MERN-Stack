const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Enable CORS for all routes
app.use(cors());
// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/todos", require("./routes/todoRoutes.js"));

module.exports = app;
