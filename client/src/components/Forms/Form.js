import React from "react";
import {
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import PP from './images/PayPal.png';
import PhP from './images/PhonePe.png';
import GP from './images/GP.png';
import UPI from './images/upi.jpg';
import visa from './images/visa.png';
import rp from './images/Rupay.png';
import mc from './images/mc.png';
import ms from './images/maestro.png';

import DropSelector from "./Dropdown"
import Pay_btn from "../Buttons/Payment_btn"

const CssTextField = withStyles({
  root: {
    color:"white",
    borderColor:"white",
     "& .MuiFormLabel-root": {
      color: "white"
    },
    "& label.Mui-focused": {
      color: "white",
      borderColor:"white"
    },
    "& .MuiInput-underline:after": {
      color: "white",
      borderColor:"white",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      borderColor:"white",

      "&:hover fieldset": {
        color: "white",
      borderColor:"white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        color:"white"
      },

  }
}})(TextField);




const useStyles = makeStyles(theme => ({
  paperContainer:{
   backgroundColor:"#171a3d",
   alignItems:"center",
   justifyContent:"center",
   padding:"6em",
   width:'100%',
 
    [theme.breakpoints.down("sm")]:{
    textAlign:"center",
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    [theme.breakpoints.down("xs")]:{
    textAlign:"center",
    paddingLeft:"1.5em",
    paddingRight:"1.5em"
    }
  },


  paperItem:{
    margin:"1em",
    alignItems:"center",
    justifyContent:"center",
  },

  
  paper: {
   backgroundColor:"#1e2148",
   color:"white",
   width: 500,
   borderRadius:5,
   height:700,
   textAlign:"center",
  
   [theme.breakpoints.down("xs")]:{
    width:300,
    height:850
    }
  },
 
 
  buttons: {
  backgroundColor:"white",
  marginTop:"3em",
  width:"20%",
  height:"50%",
  margin:4,
  },

  margin: {
    margin: theme.spacing(1),
    [theme.breakpoints.down("xs")]:{
     marginTop:"2.5em"
    }
  },

  margins:{
  margin: theme.spacing(1),
    [theme.breakpoints.down("xs")]:{
    }
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    [theme.breakpoints.down("xs")]:{
    justifyContent:"center"
    }
  },

  notchedOutline: {
    borderWidth: "1px",
    color:"white",
    borderColor: "white !important"
  }
}));



export default function CustomizedInputs() {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  return (
   <Grid container className={classes.paperContainer} >
     <Grid item className={classes.paperItem}>
     <Paper className={classes.paper} elevation={4} justify="center">

      <Typography style={{color:"#0a64a8",paddingTop:"2em",fontSize:"1.3em"}}>MAKE YOUR PAYMENT</Typography>
      <Grid item container>
        <Grid item>
      <Button href="https://www.paypal.com/in/signin" className={classes.buttons}>
        <img src={PP} alt="paypal" />
      </Button>
   
       <Button href="https://www.phonepe.com/how_to_pay/index.html" className={classes.buttons} >
        <img src={PhP} alt="phonepe"/>
      </Button>
    
      <Button href="https://pay.google.com/gp/w/u/0/home/signup?sctid=577873504484063" className={classes.buttons} >
        <img src={GP} alt="googlepay" />
      </Button>

       <Button className={classes.buttons} >
        <img src={UPI} alt="bhimupi" />
      </Button>
    </Grid>
    </Grid>
        <Typography style={{color:"white",paddingTop:"2em",fontSize:"1em"}}>
          OR DEBIT/CREDIT CARD
        </Typography>
        <Grid item container >
        <Grid item>
          <img src={visa} alt="visa" width="10%" height="10%" style={{margin:4}}/>        
          <img src={rp} alt="rupay" width="12%" height="15%" style={{margin:4}}/>   
          <img src={mc} alt="master" width="10%" height="10%" style={{margin:4}}/>
          <img src={ms} alt="maestro" width="10%" height="10%" style={{margin:4}}/>
        </Grid>
        </Grid>
        <Grid item container justify="center" style={{marginTop:"1em"}} >
      <form className={classes.root}  noValidate>
         <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple" style={{color:"white"}}>
            CARD NUMBER
          </InputLabel>
          </FormControl>
         <CssTextField  
            className={classes.margin}
            label ="XXXX XXXX XXXX XXXX"
            variant="outlined"
            id="custom-css-outlined-input"
            style={{ width: 280 }}
             InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
          />
 

         <div>
           <FormControl variant="outlined" className={classes.formControl} >
           <InputLabel ref={inputLabel} htmlFor="outlined-age-simple" style={{color:"white"}}>
            HOLDER NAME
          </InputLabel>
          </FormControl>
         <CssTextField  
            className={classes.margin}
            label="Name of card holder"
            variant="outlined"
            id="custom-css-outlined-input"
            style={{ width: 280 }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
 
         </div>
 
         <div>
          
             <DropSelector />
          </div>
  
         <div>
           <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple" style={{color:"white"}}>
            CCV
          </InputLabel>
          </FormControl>
         <CssTextField  
            className={classes.margins}
            label ="CCV NUMBER"
            variant="outlined"
            id="custom-css-outlined-input"
            style={{ width: 120 }}
             InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
          />
 
         </div>
 
         <div>
           <Pay_btn />
         </div>

        </form>
        </Grid>
        </Paper>
  </Grid>
  </Grid>
  ); 
}
