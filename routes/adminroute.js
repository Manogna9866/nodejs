const express = require('express')
const admins =require('../model/adminmodel.js')

const route =express.Router();

route.post('/addadmin',(req,res)=>{
    const p =new admins(req.body);
    p.save();
    res.status(201).json(p)
});
route.put('/updateadmin/:id',async(req,res)=>{
    const updateadmins = await admins.findByIdAndUpdate(req.params.id ,{ $set: req.body},{new:true});
    res.status(201).json(updateadmins)
});
route.get('/adminlist',async(req,res)=>{
    try{
        const adminlist = await admins.find();
        res.status(201).json(adminlist);
    }catch (error){
        console.log(error);
        res.status(500).json({message:'internal server error'})
    }
});

route.delete('/deleteadmin/:id',async(req,res)=>{
    try{
        const deleteadmins = await admins.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteadmins) 
    }catch(err){
        res.status(500).json({err:"delete succesfully"}) 
    }
   
});





module.exports=route