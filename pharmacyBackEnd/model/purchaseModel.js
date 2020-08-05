const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const purchaseSchema= new Schema({
    medicineName: String,
    price: Number,
    pricePerQuantity: Number,
    stock: Number,
    expiry: String,
    imgUrl: String,
    total: Number,
    value: Number,
    deliveryType: String,
    des:String,
    user: String,
    feedback: String,
    date: String,
    userName: String,
    address: String,
    pinCode: Number,
    phoneNumber: Number
                                                                        });
module.exports=mongoose.model('purchase',purchaseSchema,'purchases');