import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import banner from './banner.jpg';

const useStyles=makeStyles(theme=>({

mainContainer:{
    marginTop:"2em",
    backgroundImage:`url(${banner})`,
    backgroundPosition:"center",
    overflow:'hidden',
    backgroundSize:"cover",
    backgroundRepeat:'no-repeat',
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
    width:'100%',
    height:700,
 
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

   rowContainer:{
    display:'flex',
    flexDirection:'row',
 
    [theme.breakpoints.down("sm")]:{
      display:'flex',
      flexDirection:"column",
    },

     [theme.breakpoints.down("xs")]:{
      display:'flex',
      flexDirection:"column",
      }
  },

  Content:{
    color:"white",
    textAlign:"justify",
    fontSize:"1.2em",
    fontWeight:300,
    lineHeight:1,
    paddingLeft:"3em",
    paddingRight:"3em",
    paddingTop:"10em",
    width:"100%",

    [theme.breakpoints.down("sm")]:{
    width:"100%",
    paddingTop:"2em",
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    
    [theme.breakpoints.down("xs")]:{
    width:"100%",
    paddingTop:"1em",
    paddingLeft:"1em",
    paddingRight:"1em",
    alignItems:"center",    },
},

Header:{
//    paddingTop:"2em",
    fontSize:"3em",
    color:"white",
    float:"left",
    fontWeight:200,

    [theme.breakpoints.down("sm")]:{
    fontSize:"2.5em",
    textAlign:"center",
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },

    [theme.breakpoints.down("xs")]:{
    fontSize:"2.5em",
    textAlign:"center",
    paddingLeft:"1em",
    paddingRight:"1em"
    }
  },

}));



export default function Banner(){

    const classes = useStyles();

    return (
    <Grid container className={classes.mainContainer} >          
           
        <Grid item container className={classes.rowContainer} justify="center">
          <Typography className={classes.Header} justify="center">
           <p> JOIN THOUSANDS OF COMPANIES THAT RELY ON</p>
           <span style={{color:"#3fd7fe",fontWeight:300}}>AIFINDS </span>
          </Typography> 
    
        <Typography className={classes.Content} >
           <p> AIFIND Jobs will guide you through your entire IT transformation, from strategy and
           consulting to managed services.Our experts and consulting services form the foundation for
           long-lasting IT partnerships that can help you imagine and innovate in the digital world.
           We deliver best of breed technologies with a white-glove approach that provides maximum value
           for your future. AIFIND jobs will create a roadmap from where you are to where you want to be,
           and then use rigorous assessments and consulting expertise to make it happen.</p> 
        </Typography>
      </Grid>
   </Grid>
    );
  }


