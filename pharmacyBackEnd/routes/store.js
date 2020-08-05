const express=require('express');
const storeRouter=express.Router();
const mongoose=require('mongoose');
const db='mongodb+srv://user_sarath:rameshan@mycluster.fu8vc.azure.mongodb.net/pharmacydb?retryWrites=true&w=majority'
const Medicines=require('../model/medicines');

mongoose.connect(db,(err)=>{
        if(err)
        {
        console.log("error!" +err);
        }
        else{
            console.log("connected to mongodb")
        }
    })

    storeRouter.get('/',(req,res)=>{
                console.log("Store page");
                // res.send("Store page");
                Medicines.find()
                .then(function(products)
                {
                    console.log(products)
                    res.send(products)
                    
                })   
                .catch(
                    (err)=>console.log(err)
                )
    });


    storeRouter.get('/five',(req,res)=>{
        console.log("Store page");
        // res.send("Store page");
        Medicines.find().limit(5)
        .then(function(products)
        {
            console.log(products)
            res.send(products)
            
        })   
        .catch(
            (err)=>console.log(err)
        )
});


    storeRouter.get('/:id',(req,res)=>{
        var Id=req.params.id;
        console.log("Store page"+Id);
        // res.send("Store page");
        Medicines.findOne({_id:Id})
        .then(function(products)
        {
            console.log(products)
            res.send(products)
            
        })   
        .catch(
            (err)=>console.log(err)
        )
        
           
  

});



    module.exports=storeRouter;