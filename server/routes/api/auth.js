const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Profile = mongoose.model("Profile")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const{JWT_KEY} = require('../../config/keys')
const requireLogin = require('../../middleware/requireAuth')



router.post('/register',(req,res)=>{
const{name,email,password}=req.body
if(!name || !email || !password){
   return res.status(422).json({error:"Please fill all the fields"})
}
User.findOne({email:email})
.then((savedUser)=>{
    if(savedUser){
        return res.status(422).json({error:"User already exist"})
    }
    bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                name,
                email,
                password:hashedpassword
            })

        user.save()
            .then(user=>{
                 res.json({message:"Created successfully"})
             }).catch(err=>{
            console.log(err)
        })
     })
    
}).catch(err=>{
    console.log(err)
})
})

router.post('/login',requireLogin,(req,res)=>{
    const{email,password}=req.body
    if(!email || !password){
        return res.status(422).json({error:"Please add email or password"})
    }

    User.findOne({email})
        .then((savedUser)=>{
            if(!savedUser){
               return res.status(422).json({error:"Invalid email or password"})
             }
        bcrypt.compare(password,savedUser.password)
           .then(doMatch=>{
              if(doMatch){
                // res.json({message:"Login Successful"})

          const payload={
              id:savedUser._id,
              name:savedUser.name,
              email:savedUser.email,
            }

            jwt.sign(
                payload,
                JWT_KEY,
                {
            expiresIn: 31556926
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + t
            });
          }
          );
//      res.json({token,User:{_id,name,email}})
        } else {
                   return res.status(422).json({error:"Invalid email or password"})
              }
             
            }).catch(err=>{
                console.log(err)
               })
      })
    
  })

  router.get('/profile',(req,res)=>{
    username = req.user.name
    res.send("Welcome " +" "+username)
  })


 

module.exports=router;