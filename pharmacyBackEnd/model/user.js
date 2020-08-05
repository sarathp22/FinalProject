const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const usersSchema= new Schema({
    firstName: String,
    lastName: String,
    address: String,
    pinCode: Number,
    phoneNumber: Number,
    emailId: String,
    password: String,
    
                                                                        });
module.exports=mongoose.model('user',usersSchema,'users');