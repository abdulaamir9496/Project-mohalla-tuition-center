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


// Integrating Morgan will help you keep track of incoming requests and responses, making it easier to debug and maintain your application.
// app.use(morgan('common'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


// Multer is a middleware that allows you to upload files to the server. It is used to handle multipart/form-data.
// Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files in your Express applications. It simplifies the process of handling file uploads and allows you to configure storage options such as saving files to disk or keeping them in memory.

// Integrating Multer in your backend project will facilitate efficient handling of file uploads, making it easier to implement features such as tutor resume uploads or center image management. Let me know if you need further details or assistance with your setup!
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