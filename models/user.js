var mongoose=require("mongoose");
//db schema
var userSchema=new mongoose.Schema({
name:{
    type:String,
    required:[true,'please enter your name']
},
location:{
    type:String,
    required:[true,'please enter your location']
}
  
});



//converting schema into model
module.exports=mongoose.model("user",userSchema);