
const express=require('express');

const user=require('../models/user');
const router=express.Router();


// To the user create form

router.get("/new",function(req,res){
    res.render("new");
})



//get all users 

router.get('/',function(req,res){

    var noMatch = null;
    if(req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
      
        // Get all campgrounds from DB
        user.find({ $or: [ { name: regex }, { location: regex } ] }, function(err, founduser){
           if(err){
               console.log(err);
           } else {
              if(user.length < 1) {
                  noMatch = "No campgrounds match that query, please try again.";
              }
              res.render("index",{user:founduser, noMatch: noMatch});
           }
        });
    }
    else{
        user.find({},function(err,user){
            if (err) {
                console.log(err);
            }
            else{
                res.render("index",{user:user});
    
            }
        })
    }


})


//create new user 

router.post('/', (req, res, next) => {
    name= req.body.name;
    location=req.body.location;
  newuser={name:name,location:location}
 
    user.create(newuser,function(err,user){
        if (err) {
            console.log(err);
        }
        else{
            res.redirect("/users");
          }
    })
  });

 


  function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;
