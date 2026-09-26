const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
    const user = new User({
        firstName: "Debashis",
        lastName: "Moharana",
        email: "moharana.debashis@gmail.com",
        password: "cybage@123",
        userName: "debashism",
        age: "34"
    });

    try {
        await user.save();
        res.send("User created successfully");
    } catch {
        res.status(404).send("Something went wrong");
        throw new error();
    }
});

connectDB().then(() => {
    console.log("Database connection successful...");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch((err) => {
    console.log("Connection error !!!");
});
