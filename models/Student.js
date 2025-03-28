const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    center: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Center'
    },
    classDetails: {
        grade: String,
        section: String
    }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
