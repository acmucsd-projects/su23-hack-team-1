

const mongoose = require("mongoose");
const AddUnitSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    itemType:{
        type: String,
        // enum: ['Protein','Meat','Poultry','Vegetables','Fruit'],
        // required: true,
    },
    fridge:{
        type: String,
        // enum: ['Yes','No','Deep Fridge'],
    },
    purchaseDate:{
        type: Date,
    },
    expiryDate:{
        type: Date,
    },
    amount:{
        type: String,
    }
},
    {
    versionKey:false
    });

const addUnitModel = mongoose.model("add", AddUnitSchema);
module.exports = addUnitModel;