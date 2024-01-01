// Get Libraries
const express = require('express');
const router = express.Router();

// Import controllers
const indexController = require('../controllers/IndexController');

// Routes
router.get('/', indexController.index);


// Export the router
module.exports = router;