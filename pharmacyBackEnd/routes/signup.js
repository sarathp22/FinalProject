const express=require('express');
const signupRouter=express.Router();
const User=require('../model/user');
const mongoose=require('mongoose');
const db='mongodb+srv://user_sarath:rameshan@mycluster.fu8vc.azure.mongodb.net/pharmacydb?retryWrites=true&w=majority'



mongoose.connect(db,(err)=>{
    if(err)
    {
    console.log("error!" +err);
    }
    else{
        console.log("connected to mongodb")
    }
})
signupRouter.post('/',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log("signup");
    console.log(req.body);
    var emailid=req.body.emailId;
    var user={
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        address : req.body.address,
        pinCode : req.body.pinCode,
        phoneNumber : req.body.phoneNumber,
        emailId : req.body.emailId,
        password : req.body.password
                                    }
        User.findOne({emailId:emailid},(err,data)=>{
            if(!data)
            {
                var userdata=new User(user);
                userdata.save();
                res.status(200).send({"sccess":"success"});
            }
            else{
                res.status(401).send({"error":"Account with this email already created"});
            }
        })
});

signupRouter.get('/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    var Id=req.params.id;
    User.findOne({_id:Id})
    .then((data)=>{
        res.send(data);
    })
});


module.exports=signupRouter;