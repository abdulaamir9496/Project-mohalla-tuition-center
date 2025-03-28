const Attendance = require('../models/Attendance');
const User = require('../models/User');

// Mark attendance
const markAttendance = async (req, res) => {
    const { status, geolocation } = req.body;

    try {
        const newAttendance = new Attendance({
            user: req.user.id,
            status,
            geolocation
        });
        
        await newAttendance.save();
        res.status(201).json(newAttendance);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get attendance for admin and tutor
const getAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.find().populate('user', 'name email role');
        
        res.status(200).json(attendance);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    markAttendance,
    getAttendance
};
