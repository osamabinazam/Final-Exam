const express = require('express');
const router = express.Router();

// Import controllers
const appointmentController = require('../controllers/AppointmentController');

// Routes
router.get('/', appointmentController.appointment_list);
router.post('/', appointmentController.appointment_create);

// Export the router

module.exports = router;


