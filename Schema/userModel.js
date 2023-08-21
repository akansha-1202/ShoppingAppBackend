const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "FirstName is Required"],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, "LastName is Required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    trim: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: Number,
    required: [true, "Phone Numbe is Required"],

  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
},{timestamps : true});//for timing in which user register and login

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
