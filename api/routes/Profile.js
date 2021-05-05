const express = require("express");

const routerpro = express.Router();

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const Pro = require("../models/Profile");



routerpro.post("/profile", (req, res, next) => {

 
            const user = new Pro({

              _id: new mongoose.Types.ObjectId(),

              name: req.body.name,
 
             phone: req.body.phone,

              address: req.body.address

           
            });

            user
 
             .save()
 
             .then(result => {

                console.log(result);

                res.status(201).json({

                  message: "User Profile Created"

                });

              })

              .catch(err => {

                console.log(err);

                res.status(500).json({

                  error: err

                });

              });

          }

      
     
 
    );




routerpro.post("/login", (req, res, next) => {

  Pro.find({ email: req.body.email })

    .exec()

    .then(user => {

      if (user.length < 1) {

        return res.status(401).json({

          message: "Auth failed"

        });

      }


      bcrypt.compare(req.body.password, user[0].password, (err, result) => {

        if (err) {

          return res.status(401).json({

            message: "Auth failed"

          });

        }

        if (result) {

          const token = jwt.sign(

            {

              email: user[0].email,

              userId: user[0]._id

            },

            "aneesh",

            {

              expiresIn: "1h"

            }

          );

          return res.status(200).json({

            message: "Auth successful",

            token: token

          });

        }

        res.status(401).json({

          message: "Auth failed"

        });

      });

    })

    .catch(err => {

      console.log(err);

      res.status(500).json({

        error: err

      });

    });
});

routerpro.delete("/:userId", (req, res, next) => {

  Pro.remove({ _id: req.params.userId })

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



module.exports = routerpro;
