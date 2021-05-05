const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const {JWT_KEY} = require('../connection');

const User = require("../models/user");


router.post('/signup',(req,res)=>{
    const{name,email,password}=req.body;
    if(!email || !password || !name){
        return res.status(422).json({error:"Please fill the data"})
    }
   User.findOne({email:email})
   .then((savedUser)=>{
       if(savedUser){
                  return res.status(422).json({error:"User already exists"})
                     }
       bcrypt.hash(password,12)
       .then(hashedpassword =>{
             const user = new User({
               email,
               password:hashedpassword,
               name
                  })
             user.save()
             .then(user=>{
                 res.json({message:"Registered Successfuly"})
                  })
             .catch(err=>{
                 console.log(err) 
                  })
             })
       })
      
   .catch(err=>{
    console.log(err)
    })

})

router.post('/login',(req,res)=>{
    const{email,password} = req.body
    if(!email || !password){
        res.status(422).json({error:"Please fill your email and password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
         return res.status(422).json({error:"Invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
               // res.json({message:"Successfully logged in"})
               const token = jwt.sign({_id:savedUser._id},JWT_KEY)
               const {_id,name,email} = savedUser
               res.json({token,user:{_id,name,email}})
            }
            else{
                return res.status(422).json({error:"Invalid email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})




 
        //Check to make sure header is not undefined, if so, return Forbidden (403)



const checkToken = (req, res, next) => {

 
   const header = req.headers['authorization'];



    if(typeof header !== 'undefined') {



        const bearer = header.split(' ');


        const token = bearer[1];



        req.token = token;



        next();


    } else {


        //If header is undefined return Forbidden (403)



        res.sendStatus(403)


    }
}




    //This is a protected route

 
    router.get('/data', checkToken, (req, res) => {



 

        //verify the JWT token generated for the user


        jwt.verify(req.token, 'aneesht', (err, authorizedData) => {


            if(err){

 
               //If error send Forbidden (403)


                console.log('ERROR: Could not connect to the protected route');


                res.sendStatus(403);


            } else {


                //If token is successfully verified, we can send the autorized data

 
                res.json({


                    message: 'Successful log in',


                    authorizedData


                });


                console.log('SUCCESS: Connected to protected route');

 
           }


        })


    });






router.delete("/:userId", (req, res, next) => {


  User.deleteOne({ userId: req.params._id })


    .exec()


    .then(result => {


      res.status(200).json({


        message: "User deleted"


      });


    })


    .catch(err => {

 
     console.log(err);
      res.status(500).json({


        error: err


      });


    });

});





router.route("/update/:_id").post(function(req, res)
 {

  
User.findOne({ id: req.params.id },
 function(err, user) {


    if (!user) res.status(404).send("data is not found");


    else {

 
     bcrypt.hash(req.body.password, 10, (err, hash) => {


       user.name = req.body.name;


        user.email = req.body.email;

 
       user.password = hash;


        user


          .save()


          .then(user => {


            res.json("Update complete");


          })


          .catch(err => {


            res.status(400).send("unable to update the database");


          });


      });


    }


  });

});







module.exports = router;
