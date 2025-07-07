const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kaviya:ERD@cluster0.rbuzb3j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")


    .then(() => {
        console.log("Connection is successful");
    })
    .catch(err => {
        console.error("Connection error:", err);
    });