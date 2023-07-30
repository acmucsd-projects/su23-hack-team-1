const express = require('express');
const router = express.Router();
// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   firstname: {
//     type: String, 
//     required: true,
//   },
//   age: {
//     type: Number,
//     required:true,    
//   }
// });

// const UserModel = mongoose.model("users", UserSchema)
// module.exports = UserModel;
/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = {
    name: 'ACM Hack',
    email: 'hack@acmucsd.org'
  }
  res.status(200).json({ user });
});

module.exports = router;
