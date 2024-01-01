const express = require('express');
const router = express.Router();

// Import controllers
const timeslotController = require('../controllers/TimeslotController');

// Routes
router.get('/', timeslotController.timeslot_list);
router.post('/', timeslotController.timeslot_create);

// Export the router
module.exports = router;





