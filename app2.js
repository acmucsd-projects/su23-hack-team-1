const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

const AddUnitSchema = new mongoose.Schema({
    item:{
        type: String,
        enum: ['Meat','Poultry','Vegetables','Fruit'],
        required: true,
    },
    storeInFridge:{
        type: String,
        enum: ['Yes','No','Deep Fridge'],
        required: true,
    },
    purchaseDate:{
        type: Date,
        required: true,
    },
    expiryDate:{
        type: Date,
        required: true,
    },
    amountOfItem:{
        amount:{
            type: Number,
            required: true,
        },
        unit:{
            type: String,
            enum: ['Kg','Lbs','actual item'],
            required: true,
        },
    },
})

const AddUnitModel = mongoose.model("Add Unit", AddUnitSchema);
module.exports = Add

app.post("/Add Item", (req, res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
  });
  dotenv.config();
  
  mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB database');
  });
  
  app.listen(8000, () => {
    console.log("Server is listening")
  });
  
  module.exports = app;