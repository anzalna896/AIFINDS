import React from 'react';
import {Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import banner from './images/banner.jpg';
import wall from './images/wall.jpg';

import first from './icons/one.png';
import second from './icons/two.png';
import third from './icons/three.png';


const useStyles=makeStyles(theme=>({

 
Content:{
  
    textAlign:"justify",
    fontSize:"1.3em",
    fontWeight:300,
    lineHeight:1.6,
    padding:"3em",
    width:"100%",

    [theme.breakpoints.down("sm")]:{
    width:"100%",
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    
    [theme.breakpoints.down("xs")]:{
    width:"100%",
    paddingLeft:"1em",
    paddingRight:"1em",
    alignItems:"center",    },
},

Header:{
//    paddingTop:"2em",
    fontSize:"3em",
    color:"#304B83",
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",

  },

Caption:{
    fontSize:"1.2em",
    fontStyle:"italic",
    fontWeight:200,
    color:"#000000",
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
},

mainContainer:{
    backgroundImage:`url(${banner})`,
    backgroundPosition:"initial",
    overflow:'hidden',
    backgroundSize:"cover",
    backgroundRepeat:'no-repeat',
    minHeight:600,
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
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

 

details:{
    paddingTop:"1em",
    fontSize:"1em",
    fontStyle:"normal",
    fontWeight:300,
    color:"white",
  

[theme.breakpoints.down("sm")]:{
    textAlign:"justify",
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },

    [theme.breakpoints.down("xs")]:{
    textAlign:"justify",
    paddingLeft:"1em",
    paddingRight:"1em"
    }
  },

   button:{
    marginTop:"2em",
    marginBottom:"3em",
    fontWeight:400,
    alignItems:"center",
    justifyContent:"center", 
    background:"transparent",
    color:"black",
    textAlign:"center",
    borderRadius:"0.2em",
    border:"1px solid black",

     '&:hover':{
         filter: "brightness(0.9)",
         backgroundColor:"#3cb4d3",
         border:"1px solid #3cb4d3",
         color:"white",
        },
  },

contentContainer:{
    backgroundImage:`url(${wall})`,
    backgroundPosition:"center",
    overflow:'hidden',
    backgroundSize:"cover",
    backgroundRepeat:'no-repeat',
    minHeight:800,
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
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

stepContainer:{

    display:'flex',
    flexDirection:'row',
 
    [theme.breakpoints.down("sm")]:{
      display:'flex',
      flexDirection:"row",
    },

     [theme.breakpoints.down("xs")]:{
      display:'flex',
      flexDirection:"row",
      }
  },

logoImage:{
    width:"20%",

   [theme.breakpoints.down("sm")]:{
    width:'30%'
   },
  
   [theme.breakpoints.down("xs")]:{
    marginTop:"2em",
    width:'60%',
    height:"50%"
  
   },
  },

  paperItem:{
    margin:"2em",
    alignItems:"center",
    justifyContent:"center",
    
  },


  paper: {
   color:"white",
   width:230,
   height:300,
   background:"transparent",
   border:"1px solid #4c4d4e",
   borderTopRightRadius:"500px",
   borderTopLeftRadius:"500px",
   borderBottomRightRadius:"500px",
   borderBottomLeftRadius:"500px",
  },
 
  
}));


export default function About(){

  const classes = useStyles();
return(
<>

<Grid container className={classes.mainContainer} >
 <Grid item className={classes.rowContainer}>
     <Grid item container justify="center" >
       <Grid item>
    <Typography className={classes.Header} style={{color:"#3cb4d3"}} justify="center" >
            <p>BUILD YOUR FUTURE </p>  
    </Typography>
    <Typography className={classes.Caption} style={{fontWeight:300}} justify="center" >
        <p> We Offer Various Services to To You</p>
    </Typography>
     
    <Typography className={classes.Content} style={{fontSize:"1.2em"}}>
     <p>AIFINDSJOB, one of the most trustworthy job portals in India, that acts as a bridge
        between recruiters and job seekers. A reliable platform for both students and young
        professionals looking for jobs matching their skill requirements. AIFINDSJOB offers
        an easy application option and a user-friendly interface, which allows users to browse
        through job opportunities within a few clicks. Also, helps in advancing the career through 
        services such as automated CV creation, automated job proposals, and free career guidance and counseling.
     </p> 
   </Typography>
    <Link to="/About">
      <Button className={classes.button}>
        READ MORE
      </Button>
    </Link>
</Grid>
 </Grid> 
  <Grid item container >
   
  </Grid>  
  </Grid> 
 </Grid>

<Grid container className={classes.contentContainer} align="center">
  
   <Grid item container  justify="center">
    <Grid item  justify="center">
     <Typography className={classes.Header} style={{color:"#3cb4d3",marginTop:"1em"}} >
              HOW WE WORKS ?
     </Typography>
     <Typography className={classes.Caption} style={{color:"white"}} >
           We Help People To Get Successful Job And Become Professionals
     </Typography>
    </Grid>
   </Grid>

  <Grid item className={classes.stepContainer} justify="center">
   <Grid item container >
       <Typography className={classes.Caption} 
       style={{fontSize:"1.5em",fontStyle:"normal",fontWeight:300,color:"#3cb4d3",paddingTop:"1.5em"}}
       >
         REGISTER FREE WITH US
       </Typography>
   </Grid>
   
   <Grid item container justify="center">
    <img src={first} alt="first" className={classes.logoImage}/> 
   </Grid>

   <Grid item container justify="center">
     <Typography className={classes.details} style={{paddingTop:"2.5em"}} >
      <p>Create an account and access on any device.</p>
    </Typography>
   </Grid>
  </Grid>


  <Grid item className={classes.stepContainer} justify="center">
   <Grid item container >
       <Typography className={classes.Caption} 
       style={{fontSize:"1.5em",fontStyle:"normal",fontWeight:300,color:"#3cb4d3",paddingTop:"1.5em"}}
       >
         GET OUR TOP SERVICES
       </Typography>
   </Grid>
   
   <Grid item container justify="center">
    <img src={second} alt="second" className={classes.logoImage}/> 
   </Grid>

   <Grid item container justify="center">
     <Typography className={classes.details} style={{paddingTop:"2.5em"}} >
      <p>Set up an account and be first to the latest jobs.</p>
    </Typography>
   </Grid>
  </Grid>


  <Grid item className={classes.stepContainer} justify="center">
   <Grid item container >
       <Typography className={classes.Caption} 
       style={{fontSize:"1.5em",fontStyle:"normal",fontWeight:300,color:"#3cb4d3",paddingTop:"1.5em"}}
       >
         GRAB YOUR DREAM JOB
       </Typography>
   </Grid>
   
   <Grid item container justify="center">
    <img src={third} alt="second" className={classes.logoImage}/> 
   </Grid>

   <Grid item container justify="center">
     <Typography className={classes.details} style={{paddingTop:"2.5em"}} >
      <p>Be found and we put you in front of great employers.</p>
    </Typography>
   </Grid>
  </Grid>
</Grid>
 
</>
);

}

