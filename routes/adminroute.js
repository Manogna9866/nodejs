const express = require('express')
const admins =require('../model/adminmodel.js')
const cors=require('cors')
let corsOptions={
    origin:['http://localhost:4040']
}
const route =express.Router();

route.post('/addadmin',cors(corsOptions),(req,res)=>{
    const p =new admins(req.body);
    p.save();
    res.status(201).json(p)
});


route.post( '/login',cors(corsOptions), async(req,res) =>{
    const admin = await admins.findOne(req.body);
    if(admin){
      res.status(201).json(admin);
    }else{
      res.status(500).json('user login failed'); 
    }
  });
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