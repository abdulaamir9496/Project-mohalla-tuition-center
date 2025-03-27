require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('common'));

// Multer

//Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(() => console.log('MongoDB Successfully Connected'))
.catch(err => console.log('MongoDB connection error:',err));

//Define a basic route
app.get('/', (req, res) => {
    res.send('Welcome to Mohalla Tuition Center Backend');
});

//Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});