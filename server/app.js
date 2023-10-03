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

const UserModel = require('./models/users.js');
const ItemModel = require('./models/addunit.js');
app.post("/Login", (req, res) =>{
  const {username, password} = req.body;
  UserModel.findOne({username: username})
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

app.post("/Signup", (req, res) =>{
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
});

app.post("/Pantry", (req, res) =>{
  ItemModel.create(req.body)
  .then(add => res.json(add))
  .catch(err => res.json(err))
});
dotenv.config();


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

app.listen(8000, () => {
  console.log("server is listening")
});

module.exports = app;
