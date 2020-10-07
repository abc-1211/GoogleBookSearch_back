// NPM
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Route
const router = require('./routes/index');

// Configure dotenv
dotenv.config();

// Define PORT
const PORT = process.env.PORT || 8080;

// Define express server
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Specify API routes
app.use('/api', router);

// Conect to MongoDB using mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googleBooksDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('successfully connected to database');
});
mongoose.set('useCreateIndex', true)

// Start server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});