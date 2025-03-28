const express = require('express');
const router = express.Router();
const {
    markAttendance,
    getAttendance
} = require('../controllers/attendanceController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, markAttendance);       // Tutor marking attendance
router.get('/', protect, getAttendance);         // Admin/Tutor fetching records

module.exports = router;
