const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodeMailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
// mongodb+srv://ismail:<password>@cluster0.okmakpp.mongodb.net/

mongoose
  .connect("mongodb+srv://ismail:12345@cluster0.okmakpp.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("Mongo db connection error: " + err);
  });

app.listen(port,()=>{
console.log(`server is running on ${port}`)
})


//endpoint to register in app
const User = require("./models/users")
const Order=require("./models/order")

const sendVerficationEmail=async (email,verificationToken)=>{

  //create the nodemailer transport
  const transporter=nodeMailer.createTransport({
    service:"gmail",
    auth:{
      user:'m.iskhan078@gmail.com',
      pass:'ismail491'
    }
  })
  //compose the email 
  const mailOptions={
    from :'amazon.com',
    to:email,
    subject:"Email verification",
    text: "Please click the following link to verify your account: http/localhost/8000/verify/${verificationToken} "

  }

  //sending email
  try{
    await transporter.sendMail(mailOptions)

  }catch(err){
    console.log("Error while sending email ",err)
  }

}

app.post("/register",async(req,res)=>{
  try{
    const {name,email,password}=req.body;
    const existingUser=await User.findOne({email});
    if (existingUser){
      return res.status(400).json({message:"Email already registered"})
    }

    //create new user
    const newUser=User({name,email,password})

    //versification

    newUser.verificationToken=crypto.randomBytes(20).toString("hex")

    //save user to database
    await   newUser.save()

    //verification sending using email
    sendVerficationEmail(newUser.email,newUser.verificationToken)

  }catch(err){
    conosle.log("error registering user ",err)
    res.status(500).json({message:"Registration failed"})
  }
})

//endpoint to verify email 

