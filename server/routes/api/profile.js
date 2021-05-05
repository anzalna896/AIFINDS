const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const{JWT_KEY} = require('../../config/keys')
const requireAuth = require('../../middleware/requireAuth')
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'uploads/');
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
});

const fileFilter = (req,file,cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null,true)
    }
    else{
        cb(new Error("Inappropriate File Type"),false)
       
    }
};

const upload  = multer({storage : storage,  sizelimit :{ fileSize: 1024*1024*5 },fileFilter:fileFilter                             
})


router.get('/profile', async (req,res)=>{
    username  = req.user.name
   res.send("Welcome:"+" " + username)
})

router.post('/profile',upload.fields([{name:'Photo',maxCount: 1}]),(req,res)=>{
    photo       = req.files['Photo'][0].path
    const { firstname,
            lastname,
            address,
            phone,
            email,
            photo,
            qualification,
            college,
            city,
            state,
            date,
            marks,
            about,
            designation,
            experience,
            project,
            skills} = req.body 

    const AlphaRegEx = /^(?!-)[a-zA-Z-]*[a-zA-Z]$/
    const EmailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const PhoneRegEx = /^\d{10}$/

    if(!firstname || !lastname || !address || !phone || !email || !photo || !qualification || !college || !city || !state || !date || !marks || !about || !skills){
      return res.status(422).json({error:"Please fill all the fields"})
    }

     if(name.match(AlphaRegEx) == null){
        return res.status(422).json({ error : "Name Field Should Consist of Only Alphabets"})
    }
    if(email.match(EmailRegEx) == null){
        return res.status(422).json({ error : "Invalid Email Id"})
    }
    if(phone.match(PhoneRegEx) == null){
        return res.status(422).json({ error : "Phone Number should be of 10 Digits"})
    }

    User.findOne({email : email}).then((fetchData)=>{
        if(fetchData){
            return res.status(422).json({error : "The Email Has Taken"})
        }
        
        bcrypt.hash(Password,12).then(hashedPassword=>{
                const newUser = new User({
                    firstname,
                    lastname,
                    address,
                    phone,
                    email,
                    photo,
                    qualification,
                    college,
                    city,
                    state,
                    date,
                    marks,
                    about,
                    designation,
                    experience,
                    project,
                    skills
                        })
                newUser.save().then(newUser=>{
                    res.json("Profile Created Succesfull")
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


    
module.exports = router