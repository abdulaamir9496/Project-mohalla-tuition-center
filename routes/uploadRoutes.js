const express = require('express');
const router = express.Router();
const multer = require('multer');

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

router.post('/resume', upload.single('resume'), (req, res) => {
    res.send(`File uploaded: ${req.file.path}`);
});

router.post('/center-image', upload.single('image'), (req, res) => {
    res.send(`Center image uploaded: ${req.file.path}`);
});

module.exports = router;
