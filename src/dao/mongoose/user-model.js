const mongoose = require("mongoose");

const User = mongoose.model('User', {id: String,Name: String,LastName: String,Email: String,mdp:String}, "users");

module.exports = User