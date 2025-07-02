const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ka:k123@cluster0.fbgmpaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    .then(() => {
        console.log("Connection is successful");
    })
    .catch(err => {
        console.error("Connection error:", err);
    });