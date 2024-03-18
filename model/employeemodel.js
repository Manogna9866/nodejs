const mongo =require('mongoose');

const employee=new mongo.Schema({
    fullname:{
        type:String
    },
    lastname:{
        type:String
    },
    mobileno:{
        type:String
    },
    emailid:{
        type:String
    }
});

module.exports=mongo.model('employees',employee);