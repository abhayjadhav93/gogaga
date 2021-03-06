const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const usersroutes=require('./routes/users');
const app=express();

const url=process.env.MONGO_URL || "mongodb://localhost/gogaga"

app.set("view engine","ejs");
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},function(err,db)
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("connected to database");
    }
});

app.get("/",function(req,res){
    res.redirect("/users")
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));





  app.use('/users',usersroutes);


module.exports=app;