const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");
const app = express();
dotenv.config({path:"/config.env"});
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// const DB =  process.env.DATABASE;

mongoose.connect("mongodb://localhost:27017/WorkDB", {useNewUrlParser: true});
const UserSchema={
    name:{
        type:String,
        require : true,
       
    },
    email:{
        type:String,
        require : true,
        unique:true
    },
    phone:{
        type:Number,
        require : true
        
    },
    password:{
        type:String,
        require : true
         
    },
 }
 const User = mongoose.model("User", UserSchema);
 app.get("/",function(req,res){
     res.render("login");
 })
 app.get("/signup",function(req,res){
     res.render("signup");
 })
 app.post("/signup",async function(req,res){
    //  const email = req.body.email;
    //  const userEmail = await User.findOne({email:email},function(error,result){
    //      if(error){
    //          console.log(error);
    //      }
    //  });
    //  if(userEmail!=null){
    //      res.send("you have already registered with this email");
    //  }
    //      const user =new User({
    //          name:req.body.name,
    //          phone:req.body.number,
    //          email:req.body.email,
    //          password: req.body.password,
    //         //  cpassword:req.body.cpassword
     
    //      });
    //      user.save();
    const email= req.body.email;
    const number = req.body.number;
    const useremail =  await User.findOne({email:email});
    // const usernumber = await User.findOneAndDelete({number:number});
    
    if(useremail!=null){
        // res.render("error.ejs",{errortitle:"SIGN-IN ERROR", errorcontai :"Same email id or mobile number are already exist"})
        res.send("dubara dal");
    }
    
        const password = req.body.password;
        // const cpassword= req.body.cpassword;
        
            const user =new User({
                name:req.body.name,
                phone:req.body.number,
                email:req.body.email,
                password: req.body.password,
                // cpassword:req.body.cpassword

            })
            
            user.save();
            
        
     
          
    
    
     res.redirect("/");
 })

 app.post("/login", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const useremail =  await User.findOne({email:email});


    if(useremail.password===password){
     
        
       res.send("you have succesfully logged in ");
       
        
     
    }else{
        res.send("Incorrect Password");
    }
 })
app.listen(800,function(){
    console.log("The server is running on port 800");
});