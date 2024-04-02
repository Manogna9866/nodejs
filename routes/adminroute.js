const express = require('express')
const adminModel =require('../model/adminmodel.js')
const cors=require('cors')
const jwt=require('jsonwebtoken')


let corsOptions={
    origin:['http://localhost:4040']
}
const route =express.Router();

route.post('/addadmin',cors(corsOptions),(req,res)=>{
    const newadmin =new adminModel(req.body);
    newadmin.save();
    res.status(201).json(p)
});


route.post( '/login',cors(corsOptions), async(req,res) =>{
    try{
      const Admin=await
      adminModel.findOne({"username":req.body.username,"password":req.body.password})
      if(!Admin){
        res.status(404).json('user not found')
      }
      
    
    const  secretkey='my-secretKey';

    const token =jwt.sign({"username":req.body.username,"password":req.body.password},secretkey,{expiresIn:"2h"})
    res.status(201).json({Admin,token})
  } catch(err){
    res.status(500).json({err:'User login failed'})
  }
}) 

// route.put('/updateadmin/:id',cors(corsOptions),async(req,res)=>{
//     const updateadmins = await admins.findByIdAndUpdate(req.params.id ,{ $set: req.body},{new:true});
//     res.status(201).json(updateadmins)
// });
// route.post('/adminlist',cors(corsOptions),async(req,res)=>{
//     try{
//         const adminlist = await admins.find1();
//         res.status(201).json(adminlist);
//     }catch (error){
//         console.log(error);
//         res.status(500).json({message:'internal server error'})
//     }
// });

// route.delete('/deleteadmin/:id',cors(corsOptions),async(req,res)=>{
//     try{
//         const deleteadmins = await admins.findByIdAndDelete(req.params.id)
//         res.status(200).json(deleteadmins) 
//     }catch(err){
//         res.status(500).json({err:"delete succesfully"}) 
//     }
   
// });





module.exports=route