const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const contactSchema= new Schema({
fname: String,
lname: String, 
email: String,
subject: String,
message:String
});
module.exports=mongoose.model('contact',contactSchema,'contacts');