const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB Connected Successfully!',mongoose.connection.name);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
};

connectDB();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://Alumni-frontend.vercel.app' ],
    credentials: true,})
);

app.use(express.json());

// User Model
const newRegister = require('./models/register.js');

const JWT_SECRET = process.env.JWT_SECRET;

app.post('/register',async (req,res) => {
    try{
        console.log("Registration Route");
        const {name , email ,mobile , password, batch, branch , profession, company} = req.body;
        if(!name || !email || !mobile || !password || !batch || !branch){
            return res.status(400).json({msg: "Please enter all the fields"});
        }
        const existingUser = await newRegister.findOne({ $or: [{ email }, { mobile }] });
        if (existingUser) {
            return res.status(400).json({ msg: "User with this email or mobile already exists" });
        }


        const salt =await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser= new newRegister ({
            name,
            email,
            mobile,
            password: hashedPassword,
            batch,
            branch,
            profession,
            company,
        });
        await newUser.save();
        res.status(201).json({msg: "User registered successfully"});
    }
    catch (error){
        console.log("Error in Registration", error)
        res.status(500).json({msg: "Server Error", error: error.message});
    }
});

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});