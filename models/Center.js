const mongoose = require('mongoose');

const centerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
      type: String,  // URL or file path
        required: true
    }
}, { timestamps: true });

const Center = mongoose.model('Center', centerSchema);
module.exports = Center;
