const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shashankrai0805:z7m85qi2OO7FMHTr@cluster0.8riu6dg.mongodb.net/test2");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});


const User = mongoose.model("User", UserSchema);

module.exports = {
    User
};