const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    mobile:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength:10,
        maxlength: 10,
    },
    password:{
        type: String,
        required: true,
    },
    batch: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    default: "Not specified",
  },
  company: {
    type: String,
    default: "N/A",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
       
});

const newRegister = mongoose.model('newRegister', registerSchema);
module.exports = newRegister;