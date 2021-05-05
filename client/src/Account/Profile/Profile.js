import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//External Pages
import AddressForm from "./AddressForm";
import Qualification from "./Qualification";
import Work from "./Work"


const useStyles = makeStyles(theme => ({
  
  paperContainer:{
   backgroundColor:"#171a3d",
   alignItems:"center",
   justifyContent:"center",
   padding:"6em",
   width:'100%',
 
    [theme.breakpoints.down("sm")]:{
    textAlign:"center",
     width:'100%',
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    [theme.breakpoints.down("xs")]:{
    textAlign:"center",
     width:'100%',
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
   backgroundColor:"white",
   color:"white",
   borderRadius:5,
   padding:"2em",
   textAlign:"center",

   [theme.breakpoints.down("xs")]:{
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    width:320,
    height:780,
    },
  },
   
   stepper: {
      padding: theme.spacing(3, 0, 5),
      [theme.breakpoints.down("xs")]:{
       padding:theme.spacing(1,0,1)
    },
   },


  buttons: {
    display: "flex",
    justifyContent: "flex-end"

  },

  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    border:"1px solid #304B83",
     '&:hover':{
         filter: "brightness(0.9)",
         backgroundColor:"#223d58",
         color:"white"
        },

  }
}));

const steps = ["Profile","Qualification", "Experience"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Qualification />;
    case 2:
      return <Work />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
       <Grid container className={classes.paperContainer}>
        <Grid item className={classes.paperItem} justify="center">
          <Paper className={classes.paper} elevation={4} justify="center"> 
          <Typography component="h3" variant="h4" align="center" style={{color:"#171a3d"}}>
            PROFILE UPDATION
          </Typography>
        <Grid item  xs={12}>
          <Stepper alternativeLabel activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
           <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </Grid>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Your Profile Updated Sucessfully.
                </Typography>
                <Typography variant="subtitle1">
                  Keep in touch for more updates.Your dream job coming soon... 
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Update Profile" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        </Grid>
      </Grid>
  );
}
