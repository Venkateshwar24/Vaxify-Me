const mongoose=require('mongoose');

const User=mongoose.model('User',{
    pincode:{type:String},
    emailid:{type:String},
});


module.exports={User};