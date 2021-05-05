const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
            photo:{
                type:String,
                required:true
            },
            firstname:{
                type:String,
                required:true
            },
            lastname:{
                type:String,
                required:true
            },
            address:{
                type:String,
                required:true
            },
        
           phone:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            photo:{
                type:String,
                required:true
            },
            qualification:{
                type:String,
                required:true
            },
            college:{
                type:String,
                required:true
            },
            city:{
                type:String,
                required:true
            },
            state:{
                type:String,
                required:true
            },
            DoG:{
                type:String,
                required:true
            },
            percentage:{
                type:String,
                required:true
            },
           about:{
                type:String,
                required:true
            },

            designation:{
                type:String,
                required:true
            },
            company:{
                type:String,
                required:true
            },
            experience:{
                type:String,
                required:true
            },
            skills:{
                type:String,
                required:true
            },
            project:{
                type:String,
                required:true
            },

        
         
        })

        mongoose.model("Profile",profileSchema)