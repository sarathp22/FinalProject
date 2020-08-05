const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const medicinesSchema= new Schema({
    medicineName: String,
    price: Number,
    pricePerQuantity: Number,
    stock: Number,
    expiry: String,
    imgUrl: String,
    des:String
                                                                        });
module.exports=mongoose.model('medicine',medicinesSchema,'medicines');