const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const usersroutes=require('./routes/users');
const app=express();


app.set("view engine","ejs");
mongoose.connect("mongodb://localhost:27017/gogaga",{useNewUrlParser:true,useUnifiedTopology:true},function(err,db)
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("connected to database");
    }
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));





  app.use('/users',usersroutes);


module.exports=app;