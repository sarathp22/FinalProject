const express=require('express');
const purchaseRouter=express.Router();
const mongoose=require('mongoose');
const db='mongodb+srv://user_sarath:rameshan@mycluster.fu8vc.azure.mongodb.net/pharmacydb?retryWrites=true&w=majority'
const Purchases=require('../model/purchaseModel');

mongoose.connect(db,(err)=>{
        if(err)
        {
        console.log("error!" +err);
        }
        else{
            console.log("connected to mongodb")
        }
    })

    purchaseRouter.get('/',(req,res)=>{
        Purchases.find({feedback:null})
        .then((data)=>{
            res.send(data);
        })

    });

    purchaseRouter.get('/display',(req,res)=>{
        Purchases.find({feedback:{$ne:null}})
        .then((data)=>{
            res.send(data);
        })

    });

    purchaseRouter.get('/order/:id',(req,res)=>{
        
        var Id=req.params.id;
        Purchases.find({user:Id , feedback:{$ne:null}})
        .then((data)=>{
            res.send(data);
        })


    });

    purchaseRouter.post('/',(req,res)=>{
        
        var data=req.body;
        // console.log(data[0]);
       
        for(var i=0;i<data.length;i++)
        {
            let purchase=new Purchases(data[i])
            purchase.save();
        }
        console.log("testing");

    })
    purchaseRouter.post('/feed',(req,res)=>{
        
        var data=req.body;
        // console.log(data.date);
        // console.log(data.feedback);
        Purchases.updateMany({date:data.date},{$set:{feedback:data.feedback}}).then((val)=>{res.send("Updated Successfully")})


    });

    purchaseRouter.get('/:id',(req,res)=>{
        var Id=req.params.id;
        console.log(Id);

        Purchases.find({user:Id , feedback:null})
        .then((data)=>{
            res.send(data);
        })


    });

    purchaseRouter.post('/order/delete',(req,res)=>{
        
            // res.send("Hello");
            var data=req.body;
            var date=JSON.parse(JSON.stringify(data));
            console.log(date.data);
            console.log("data");
            Purchases.deleteMany({date:date.data,feedback:null})
            .then(()=>{
            res.send('Product Removed'); 
                });

        

    })

    purchaseRouter.post('/order/update',(req,res)=>{
        
        // console.log(req.body);
        var data=JSON.parse(JSON.stringify(req.body));
        console.log(data)
        for(var i=0;i<data.length;i++)
        {
            var totalPrice;
            totalPrice=parseInt(((data[i].price / data[i].pricePerQuantity) * data[i].value).toFixed());
            var id=data[i]._id;
            var value=parseInt(data[i].value);
            console.log(id);
            console.log(value);
            Purchases.updateMany({_id:id},{$set:{value:value,total:totalPrice}}).then((val)=>{res.send("Updated Successfully")})
            
        }
            

        
        });    


    module.exports=purchaseRouter;