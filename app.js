const express = require("express");

const app = express();

const morgan = require("morgan");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");



const userRoutes = require("./api/routes/user");

const profileRoutes = require("./api/routes/Profile")

const mailerRoutes = require("./api/routes/mailer");


//Mongo Compass Connection 

// mongoose
//  
// .connect(
//     'mongodb://localhost:27017/Auth',
//
     {
// useNewUrlParser: true, 
//useCreateIndex: true }

//   )
//
 //  .then(
//
     () =>
 {
//
 //      console.log("Database is connected");
//
//     },
//
     err => {
//
 //      console.log("Can not connect to the database" + err);
//
     }
//
  // );




mongoose.Promise = global.Promise;


//Mongo Atlas Connection

mongoose.connect('mongodb+srv://AnzalnaNazar:9061596064@backend.dvzza.gcp.mongodb.net/alpha?retryWrites=true&w=majority',

  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
).then(

  () =>
 {
console.log('Database is connected')
 },

  err => {
 console.log('Can not connect to the database'+ err)}
);


app.use(morgan("dev"));

app.use("/uploads", express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",

    "Origin, X-Requested-With, Content-Type, Accept, Authorization"

  );

  if (req.method === "OPTIONS") {

    res.header("Access-Control-Allow-Methods",
 "PUT, POST, PATCH, DELETE, GET");

    return res.status(200).json({});

  }

  next();
});



// Routes which should handle requests


app.use("/user", userRoutes);

app.use("/user", profileRoutes);

app.use("/user", mailerRoutes);

app.use((req, res, next) => {

  const error = new Error("Not found");

  error.status = 404;
  next(error);
});


app.use((error, req, res, next) => {

  res.status(error.status || 500);

  res.json({

    error: {

      message: error.message

    }

  });

});

     }

    }

module.exports = app;