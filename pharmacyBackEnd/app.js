const express=require('express');
const app=new express;
const bodyParser= require('body-parser');
const cookieParser= require('body-parser');
const cors= require('cors');
const adminRouter=require('./routes/admin');
const storeRouter=require('./routes/store');
const signupRouter=require('./routes/signup');
const loginRouter=require('./routes/login');
const purchaseRouter=require('./routes/purchase');
const contactRouter=require('./routes/contact');


app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use('/admin',adminRouter);
app.use('/store',storeRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/purchase', purchaseRouter);
app.use('/contact', contactRouter);


app.get('/',(req,res)=>{
                            res.send("Hai");
                                            })
app.listen(3000,()=>{
    console.log("server running on port no:3000");
                                            });
