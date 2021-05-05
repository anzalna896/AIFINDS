const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT=5000;
app.use(cors());



//MongoDB Atlas Connection
mongoose.connect('mongodb+srv://AnzalnaNazar:9061596064@backend.dvzza.gcp.mongodb.net/Alpha?retryWrites=true&w=majority',
  { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    },
)

mongoose.connection.on("connected",()=>{
  console.log("CONNECTED TO MONGODB")
})
mongoose.connection.on("error",()=>{
  console.log("ERROR IN CONNECTION")
})

require('./models/User');
require('./models/Profile')

app.use(bodyParser.json());
app.use(require('./routes/api/auth'))
app.use(require('./routes/api/profile'))

//const profileRoutes = require("./api/routes/Profile")
//const mailerRoutes = require("./api/routes/mailer");



app.listen(PORT,()=>{
  console.log("Server running on PORT",PORT)
});


module.exports = app;