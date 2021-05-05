var express = require("express"),

path = require("path"),

nodeMailer = require("nodemailer"),

bodyParser = require("body-parser");

const mailer = express.Router();


var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());




mailer.post("/send-email", function(req, res) {


  var transport = nodeMailer.createTransport({


    host: "smtp.mailtrap.io",

    port: 2525,

    auth: {


      user: "1a4524722dc95f",


      pass: "6af827b56cb28c"

 
   }

  });



 

 const htmlEmail = `


    <h3>Password Reset</h3>


    <a href="http://localhost:3000/forgot_password">Reset</a>

   
    `;


 
 let mailOptions = {

 
   from: "<alpha@gmail.com>", // sender address

    
   to: req.body.to, // list of receivers


   subject: req.body.subject, // Subject line


   text: req.body.body, // plain text body


   html: htmlEmail // html body

 
 };



 

 transport.sendMail(mailOptions, (error, info) => {

 
   if (error) {


      return console.log(error);


    }


    console.log("Message %s sent: %s", info.messageId, info.response);


    res.render("index");

  });

});





module.exports = mailer;