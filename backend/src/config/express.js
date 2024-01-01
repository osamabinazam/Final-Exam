const express = require('express');
const cors = require('cors');
const connectDB = require('../db/connection');
require('dotenv').config();

// Import routes

const indexRoutes = require('../routes/index');
const timeslotRoutes = require('../routes/timeslot');
const appointmentRoutes = require('../routes/appointments');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(indexRoutes);
app.use('/slots', timeslotRoutes);
app.use('/appointments', appointmentRoutes);

// Export the app
module.exports = app;
