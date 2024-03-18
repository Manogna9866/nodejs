const mongoo =require('mongoose')
const admin=new mongoo.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    emailid:{
        type:String
    }
});
module.exports=mongoo.model('admins',admin);