const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/Vaxify-Me",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },(err)=>
{
    if(!err)
    {
        console.log("Database Connected");
    }
    else
    {
        console.log('Error in DB Connection:' + json.stringify(err,undefined,2));
    }
});
 
module.exports = mongoose;