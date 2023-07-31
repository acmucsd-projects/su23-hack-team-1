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

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    }
    else{
      res.json(result);
    }
    
  });
});

app.post("/createAccount", async (req, res) =>{
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
