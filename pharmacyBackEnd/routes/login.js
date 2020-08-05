const express=require('express');
const loginRouter=express.Router();
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


loginRouter.post('/',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    // console.log(req.body);
    console.log("login page");
    let userData=req.body;
    console.log(userData.email);
    User.findOne({emailId:userData.email},(err,user)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            if(!user)
            {
                res.status(401).send({"error":"Invalid email"});
            }
            else{
                if(user.password != userData.password)
                {
                    res.status(401).send({"error":"Invalid password"});
                }
                else{
                    console.log("Hai")
                   
            res.status(200).send({"token":user._id});
                    // res.status(200).send(user);
                }
            }
        }
    })
})




module.exports=loginRouter;