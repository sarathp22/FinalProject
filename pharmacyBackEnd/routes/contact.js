const express=require('express');
const contactRouter=express.Router();
const mongoose=require('mongoose');
const db='mongodb+srv://user_sarath:rameshan@mycluster.fu8vc.azure.mongodb.net/pharmacydb?retryWrites=true&w=majority'
const Contact=require('../model/contactModel');

mongoose.connect(db,(err)=>{
        if(err)
        {
        console.log("error!" +err);
        }
        else{
            console.log("connected to mongodb")
        }
    })

    contactRouter.post('/',(req,res)=>{

        var data=req.body;
        var userdata=new Contact(data);
        userdata.save();
    })

    contactRouter.get('/',(req,res)=>{

        // res.send("Hello");
        Contact.find().then((data)=>{
            res.send(data);
        })
    })

    module.exports=contactRouter;