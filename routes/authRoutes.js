const express = require('express');
const router = express.Router();
const { login, registerTutor } = require('../controllers/authController');

// Authentication routes
router.post('/login', login);
router.post('/register-tutor', registerTutor);  // Admin only

module.exports = router;
