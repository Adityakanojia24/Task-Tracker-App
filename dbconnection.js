const mongoose = require('mongoose');

const databaseconnection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Tastracker")
        console.log("Database Connnected successfully ....");
    } catch (error) {
        console.log(error);
    }
}

module.exports = databaseconnection;


