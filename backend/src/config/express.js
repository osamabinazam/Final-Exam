const express = require('express');
const cors = require('cors');
const connectDB = require('../db/connection');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Export the app
module.exports = app;
