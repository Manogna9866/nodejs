const mongo =require('mongoose');

const employee=new mongo.Schema({
    firstname:{
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
    },
    dob:{
        type:String
    },
    designation:{
        type:String
    },
    salary:{
        type:String
    },
    address:{
        type:String
    },
    password:{
        type:String
    }
    
});

module.exports=mongo.model('employees',employee);