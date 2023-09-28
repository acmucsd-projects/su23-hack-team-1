// const mongoose = require("mongoose");

// const AddUnitSchema = new mongoose.Schema({
//     item:{
//         type: String,
//         enum: ['Meat','Poultry','Vegetables','Fruit'],
//         required: true,
//     },
//     storeInFridge:{
//         type: String,
//         enum: ['Yes','No','Deep Fridge'],
//         required: true,
//     },
//     purchaseDate:{
//         type: Number,
//         purchaseDate: Date,
//         required: true,
//     },
//     expiryDate:{
//         type: Number,
//         expirationDate: Date,
//         required: true,
//     },
//     amountOfItem:{
//         amount:{
//             type: Number,
//             required: true,
//         },
//         unit:{
//             type: String,
//             enum: ['Kg','Lbs','actual item'],
//             required: true, 
//         },
//     },
// })

// const AddUnitModel = mongoose.model("Add Unit", AddUnitSchema);
// module.exports = AddUnitModel;

const mongoose = require("mongoose");

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
module.exports = AddUnitModel;