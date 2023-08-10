const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const app = express();
const cors = require("cors");

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const UserModel = require('./models/Users.js');

app.post("/Login", (req, res) =>{
  const {username, password} = req.body;
  UserModel.findOne({email: email})
  .then(user => {
    if(user){
      if(user.password === password) {
        res.json("Success")
      }
      else{
        res.json("Incorrect Password")
      }
    } else{
      res.json("User doesn't exist")
    }
  })
})

app.post("/Signup", async (req, res) =>{
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});
dotenv.config();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});



module.exports = app;
