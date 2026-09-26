const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@namastenode.vz1lxlb.mongodb.net/devTinder");
    } catch (error) {
        console.log("Error happened", error.code);
        throw new error();
    }
};

module.exports = connectDB;