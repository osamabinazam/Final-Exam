// MonngoDB connection
const mongoose = require('mongoose');
require('dotenv').config();

// Function that connects to the database
const connectDB = async () => {
    console.log("Connecting to MongoDB...");
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
    
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        console.log("Failed to connect to MongoDB. Exiting...")
        process.exit(1);
    }
}

module.exports = connectDB;
