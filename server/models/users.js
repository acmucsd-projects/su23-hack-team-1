const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type:String,
        required: true
    }
})

const User = mongoose.model('Users', UserSchema);
module.exports = User;