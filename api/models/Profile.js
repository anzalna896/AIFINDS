const mongoose = require("mongoose");


const ProfileSchema = mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,

 
 name: { type: String, required: true },


  phone: { type: String, required: true },


  address: { type: String, required: true},

  qualification: { type: String, required: true},

  experience: { type: String, required: true},

  skills: { type: String, required: true},

  


});



module.exports = mongoose.model("Profile", ProfileSchema);
