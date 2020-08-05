const express=require('express');
const adminRouter=express.Router();
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


adminRouter.get('/',(req,res)=>{
        res.send("It is Admin");
})
adminRouter.post('/',(req,res)=>{
        console.log("It is Admin");
        console.log(req.body.medicineName);
        let medicineData=req.body;
        let medicine=new Medicines(medicineData)
        medicine.save();
})
adminRouter.post('/edit',(req,res)=>{
        var id=req.body._id;
        var medicineName=req.body.medicineName;
        var price=req.body.price;
        var pricePerQuantity=req.body.pricePerQuantity;
        var stock=req.body.stock;
        var expiry=req.body.expiry;
        var imgUrl=req.body.imgUrl;
        var des=req.body.des;
        Medicines.updateMany({_id:id},{$set:{medicineName:medicineName,price:price,pricePerQuantity:pricePerQuantity,stock:stock,expiry:expiry,imgUrl:imgUrl,des:des}}).then((val)=>{res.send("Updated Successfully")})

});

module.exports=adminRouter;