const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes'); 

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());


app.use(cors());


// CORS Setup (uncomment and adjust as needed)
/*
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
*/

// Routes Setup
app.use("/api", router); 

const PORT = process.env.PORT || 8080; // Adjust the order to prioritize process.env.PORT

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
});
