import React from 'react';
import { Link } from "react-router-dom";

import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import VideoIcon from '@material-ui/icons/PlayCircleFilled';
import ClientIcon from '@material-ui/icons/RecentActors';
import TeamIcon from '@material-ui/icons/SupervisedUserCircle';
import UserIcon from '@material-ui/icons/GroupAdd';
import AccountIcon from '@material-ui/icons/AccountCircle';
import LoginIcon from '@material-ui/icons/ExitToApp';


import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from'@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import wall from './images/wall.jpg';
import vector from './images/jb.jpg';
import hero from './images/features.jpg';
import one from './images/download.jpg';
import two from './images/resume.png';
import three from './images/job.jpg';
import skill from './images/skill.png';
import guide from './images/guide.jpg';
import prepare from './images/prepare.png';
import option from './images/oppor.jpg';
import auto from './images/auto.jpeg';

const useStyles=makeStyles(theme=>({

  heroContainer:{
    backgroundImage:`url(${hero})`,
    backgroundPosition:"center",
    overflow:'hidden',
    backgroundSize:"cover",
    backgroundRepeat:'no-repeat',
    minHeight:400,
    width:'100%',

    [theme.breakpoints.down("md")]:{
     width:'100%',
    },   

    [theme.breakpoints.down("sm")]:{
      width:'100%',
    },

    [theme.breakpoints.down("xs")]:{
      width:'100%',
    },
  },


  captionContainer:{
    paddingLeft:"5em",
    paddingRight:"5em",
    marginTop:150,

    [theme.breakpoints.down("md")]:{
     width:'100%',
    },

    [theme.breakpoints.down("sm")]:{
      paddingLeft:"1.5em",
      paddingRight:"1.5em",
      width:'100%',
    },

    [theme.breakpoints.down("xs")]:{
      paddingLeft:"1em",
      paddingRight:"1em",
      width:'100%'
    },
  },


  captionStatement:{
    paddingTop:15,
    fontWeight:300,
    fontSize:"1.5em",
    color:'#FFFFFF',

    [theme.breakpoints.down("md")]:{
     width:'100%',
     paddingLeft:"1.5em",
     paddingRight:"1.5em",
    },

    [theme.breakpoints.down("sm")]:{
      paddingLeft:"1.5em",
      paddingRight:"1.5em",
      width:'100%',
    },

    [theme.breakpoints.down("xs")]:{
      paddingLeft:"1em",
      paddingRight:"1em",
      width:'100%',
      fontSize:"1.2em",
    }
  },


  missionContainer:{
    paddingLeft:"5em",
    paddingRight:"5em",
    marginTop:170,
    alignItems:"center",
    justifyContent:"center",

    [theme.breakpoints.down("md")]:{
     width:'100%',
    },

    [theme.breakpoints.down("sm")]:{
      paddingLeft:"1.5em",
      paddingRight:"1.5em",
      width:'100%',
    },

    [theme.breakpoints.down("xs")]:{
      paddingLeft:"1em",
      paddingRight:"1em",
      width:'100%'
    },
  },

  missionStatement:{
    paddingTop:20,
    fontWeight:300,
    fontSize:"1.2em",
    color:'#FFFFFF',

    [theme.breakpoints.down("md")]:{
     width:'100%',
     paddingLeft:"1.5em",
     paddingRight:"1.5em",
    },

    [theme.breakpoints.down("sm")]:{
      paddingLeft:"1.5em",
      paddingRight:"1.5em",
      width:'100%',
    },

    [theme.breakpoints.down("xs")]:{
      paddingLeft:"1em",
      paddingRight:"1em",
      width:'100%',
      fontSize:"1em",
    }
  },


  buttonContainer:{
    paddingLeft:"5em",
    paddingRight:"5em",
    marginTop:50,
    alignItems:"center",
    justifyContent:"center",

    [theme.breakpoints.down("md")]:{
     width:'100%',
    },

    [theme.breakpoints.down("sm")]:{
      paddingLeft:"1.5em",
      paddingRight:"1.5em",
      width:'100%',
    },

    [theme.breakpoints.down("xs")]:{
      paddingLeft:"1em",
      paddingRight:"1em",
      width:'100%'
    },
  },


  button:{
    marginTop:"3em",
    fontWeight:400,
    alignItems:"center",
    justifyContent:"center", 
    backgroundColor:"#304B83",
    color:"white",
    textAlign:"center",
    borderRadius:"1em",

    border:"1px solid #304B83",
     '&:hover':{
         filter: "brightness(0.9)",
         backgroundColor:"#223d58",
        },
  },
 

  videoContainer:{
    backgroundImage:`url(${wall})`,
    backgroundPosition:"center",
    overflow:'hidden',
    backgroundSize:"cover",
    backgroundRepeat:'no-repeat',
    minHeight:300,
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",

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



  videoicon:{
    marginTop:"1em",
    color:"white",
    WebkitAnimation:"pulse 1.5s infinite"
      },



  paperContainer:{
   alignItems:"center",
   justifyContent:"center",
   width:'100%',
   textAlign:"center",

    [theme.breakpoints.down("sm")]:{
    textAlign:"center",
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    [theme.breakpoints.down("xs")]:{
    textAlign:"center",
    paddingLeft:"1em",
    paddingRight:"1em"
    }
  },


  paperItem:{
    paddingTop:"5em",
    margin:"4em",
    alignItems:"center",
    justifyContent:"center",
  },


  paper: {
   width: 150,
   borderRadius:"50%",
   height:150,
  },
 
  images:{
   borderRadius:"50%",
  },


  title:{
    paddingTop:"1em",
    fontSize:"1.2em",
    color:"#FFFFFF",
  },

  icons:{
    color:"#304B83",
    fontSize:50,
   },



  cardContainer:{
    marginRight:"2em",
  //  backgroundImage:`url(${wall})`,
    backgroundColor:"#304B83",
    backgroundPosition:"center",
    overflow:'hidden',
    backgroundSize:"cover",
    backgroundRepeat:'no-repeat',
    alignItems:"center",
    justifyContent:"center",
    
    paddingLeft:"5em",
    paddingRight:"5em",
    width:'100%',
    
    [theme.breakpoints.down("sm")]:{
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    [theme.breakpoints.down("xs")]:{
    paddingLeft:"1.5em",
    paddingRight:"1.5em"
    }
  },
  
  
  Header:{
    paddingTop:"2em",
    fontSize:"1.5em",
    color:"#FFFFFF",

    [theme.breakpoints.down("sm")]:{
    textAlign:"center",
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },

    [theme.breakpoints.down("xs")]:{
    textAlign:"center",
    paddingLeft:"1em",
    paddingRight:"1em"
    }
  },


  cardItem:{
    marginTop:"2em",
    marginBottom:"2em",
    margin:"1em",
    color:"white",
  },


 root: { 
   justifyContent:"center",
   alignItems:"center",
   backgroundColor:"#304B83",
   width: 300,
   borderRadius:5,
   height:380,
   border:"1px solid #304B83",
   '&:hover':{
    boxShadow:theme.shadows[15]
        },
  },


  media: {
    backgroundColor:"#273352",
    borderRadius:"50%",
    marginTop:"2em",
    height:75,
    width:"25%",
  },


  details:{
    paddingTop:"2em",
    paddingLeft:"1em",
    paddingRight:"1em",
    color:"white",
    textAlign:"justify",
    fontSize:"0.9em",
  },


   contentContainer:{
   //backgroundImage:`url(${ban})`,
   //backgroundColor:"#4a4b61",
    paddingLeft:"4em",
    paddingRight:"4em",
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


  textContainer1:{
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


  textContainer2:{
    display:'flex',
    flexDirection:'row',
 
    [theme.breakpoints.down("sm")]:{
      display:'flex',
      flexDirection:"column-reverse",
    },

     [theme.breakpoints.down("xs")]:{
      display:'flex',
      flexDirection:"column-reverse",
      }
  },


  Content:{
    alignItems:"center",
    justifyContent:"center",
    textAlign:"justify",
    fontSize:"1.2em",
    fontWeight:400,
    lineHeight:1,
    width:"100%",
    color:"white",
    paddingLeft:"3em",
    paddingRight:"3em",
    paddingTop:"2em",
    
    [theme.breakpoints.down("sm")]:{
    width:"100%",
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    
    [theme.breakpoints.down("xs")]:{
    width:"100%",
    paddingLeft:"1em",
    paddingRight:"1em",
        },
  },


  vectorImage:{
    paddingTop:'1em',
    overflow:'hidden',
    width:"70%",
    height:"100%",

   [theme.breakpoints.down("sm")]:{
    width:'100%'
   },
  
   [theme.breakpoints.down("xs")]:{
    width:'100%'
   },
  },


   paperItems:{
    margin:"1em",
    alignItems:"center",
    justifyContent:"center",
  },

  papers:{
    paddingTop:"1em",
    alignItems:"center",
    justifyContent:"center",
    width:320,
    height:450,
  },
  
  papericons:{
    color:"#304B83",
    fontSize:50,
    paddingTop:"3em",
   },
  }));



export default function About(){

const classes = useStyles();
return(
  <>


  {/* BANNER*/}
    <div>

     <Grid className={classes.heroContainer} >
        <Grid item container justify="center" className={classes.captionContainer} >
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <Grid item >
          <Typography className={classes.captionStatement}>
             <p> “We help you find a career that you love”</p>
          </Typography>
        </Grid>
        </div>
        </Grid>   
       
     </Grid>
    </div>





{/* VIDEO */}


<Grid container className={classes.videoContainer} style={{marginTop:'2em'}}>

 <Grid item container justify="center" className={classes.buttonContainer}>
 <Grid item> <IconButton aria-label="video" className={classes.videoicon}>
         <VideoIcon fontSize="large" />
        </IconButton></Grid>
 <Grid item container  justify="center"> <Typography className={classes.Header}>WELCOME TO AIFIND JOBS</Typography></Grid>       
</Grid>
 
</Grid>





 {/* IMAGES */}
     
  <Grid container className={classes.paperContainer} >
   <Grid item container  justify="center">
   
     <Grid item justify="center">
            <Typography className={classes.Header} style={{paddingTop:"3em",color:"black",fontWeight:"500"}} >
             <p>GET HOLD OF YOUR REAL CAREER WITH US</p>
            </Typography> 
      </Grid>
      </Grid>
      <Grid item container justify="center">
    <Grid item style={{marginTop:"1em"}}>     
    <Typography className={classes.Header} style={{color:"black",fontWeight:"400",fontSize:"1.2em",fontStyle:"italic"}}>
    
    <p>We help people discover whats next.
      You often get access to unadvertised openings and get you the right head start.
    </p> 
    <p> We are proud to help organizations and individuals, to find talented people to
      achieve the success they're looking for and a group where they can grow and flourish. </p>
    </Typography>
    </Grid>
  </Grid>

   <Grid item className={classes.paperItem}>
     <Paper className={classes.paper} >
       <img src={skill} alt="skill" className={classes.images}/>
     </Paper>
     <Typography className={classes.title} style={{color:"black"}}>
      Learn your skills
    </Typography>
   </Grid>

   <Grid item className={classes.paperItem}>
     <Paper className={classes.paper} >
      <img src={guide} alt="guide" className={classes.images}/>
     </Paper>
    <Typography className={classes.title} style={{color:"black"}}>
      Guides you
    </Typography>
   </Grid>

   <Grid item className={classes.paperItem}>
     <Paper className={classes.paper}>
     <img src={prepare} alt="skill" className={classes.images}/>
     </Paper>
    <Typography className={classes.title} style={{color:"black"}}>
      Prepares you
    </Typography>
   </Grid>

   <Grid item className={classes.paperItem}>
     <Paper className={classes.paper}>
     <img src={option} alt="skill" className={classes.images}/>
     </Paper>
    <Typography className={classes.title} style={{color:"black"}}>
      Career Options
    </Typography>
   </Grid>
</Grid>





{/* CLIENTS */}

<Grid container className={classes.paperContainer} style={{paddingTop:'1em',paddingBottom:"2em"}} > 
     <Grid item className={classes.paperItem}>
       <ClientIcon  className={classes.icons}/>
     <Typography className={classes.Content} >
      <p style={{color:"black",fontWeight:"500",textAlign:"center"}} >+999</p>
      <p style={{color:"#223d58",fontWeight:"500"}}>Happy Clients</p>
    </Typography>
   </Grid>

   <Grid item className={classes.paperItem}>
     
      <TeamIcon  className={classes.icons}/>

    <Typography className={classes.Content} style={{color:"black"}}>
      <p style={{color:"black",fontWeight:"500",textAlign:"center"}}>25</p>
      <p style={{color:"#223d58",fontWeight:"500"}}>Team members</p> 
    </Typography>
   </Grid>

   <Grid item className={classes.paperItem}>
     <UserIcon  className={classes.icons}/>
    <Typography className={classes.Content} style={{color:"black"}}>
     <p style={{color:"black",fontWeight:"500",textAlign:"center"}}>1K</p>
     <p style={{color:"#223d58",fontWeight:"500"}}>Users</p>
    </Typography>
   </Grid>

</Grid>




{/* WHAT WE OFFER */}

<Grid container className={classes.cardContainer}>
 <Grid item container style={{paddingLeft:"2em"}} justify="center">
 <Grid item >
    <Typography className={classes.Header} >
      What We Offer ?
     {/* A look at our FEATURES */}
    </Typography>
    </Grid>
    </Grid>
  <Grid item className={classes.cardItem} align="center">
    <Card elevation={4} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={one}
          title=""/>
          
        <CardContent style={{paddingTop:"2em"}}>
          <Typography gutterBottom  className={classes.title} align="center" >
          Free Career Counselling & Career Guidance
          </Typography>
          <Typography className={classes.details}>
           <p>By assessing your satisfaction, goals, talents, interest, work style,
              marketability, social culture, etc. Our experts help you determine what
              career path you want to take in order to get a perfect and suitable career.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>

  <Grid item className={classes.cardItem} align="center">
    <Card  elevation={4} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={two}
          title=""/>
        
        <CardContent style={{paddingTop:"2em"}}>
          <Typography gutterBottom  className={classes.title} align="center" >
          Automated CV creation
          </Typography>
          <Typography className={classes.details} style={{paddingTop:"3.5em"}}>
          <p> AIFINDSJOB uses the most sophisticated automatic Curriculum Vitae Development platform.
             It utilizes artificial intelligence to enrich the resumes of applicants by highlighting 
             their achievements, job experience, abilities, etc. Easily spotted among recruitment administrators.
          </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>

  <Grid item className={classes.cardItem} align="center">
    <Card  elevation={4} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={three}
          title=""/>
        
        <CardContent style={{paddingTop:"2em"}}>
          <Typography gutterBottom  className={classes.title} align="center" >
          Automation of Job Proposals
          </Typography>
          <Typography className={classes.details} style={{paddingTop:"3.5em"}}>
            <p>AIFINDSJOB is accurate and specific. It contextually screens resume and saves time,
               resources, and effort. With a fast mouse press, it enables employers to recognize 
               qualifying candidates. It goes beyond basic keyword matching.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
 </Grid>




{/* CONTENTS */}

<Grid container className={classes.contentContainer} style={{paddingTop:"2em",backgroundColor:"white"}}>
   <Grid item  className={classes.textContainer1}>
     <Grid item container justify="center">
    <Typography className={classes.Header} style={{color:"grey"}}>
     SMART SOLUTIONS FOR YOUR SMART CAREER
    </Typography>
    <Typography className={classes.Content} style={{paddingBottom:"5em",color:"grey"}}>
     <p>Anything at AIFINDSJOB is for you. Our goal is to learn what matters to you, whether you are an 
       entry-level employee or a senior executive, your goals, your priorities, and your success. We aim to
       understand the requirements and track outcomes, measure reviews, and keep it confidential. We guide
       you in your career planning to pursue roles that suit your personal and professional life.
    </p> 
   </Typography>
  </Grid>
  <Grid item container  justify="center" style={{paddingBottom:"5em"}}>
       <img src={vector} alt="goals" className={classes.vectorImage} />
    </Grid>
  </Grid> 
    
    </Grid>


<Grid container className={classes.contentContainer} style={{backgroundColor:"white",paddingTop:"5em",paddingBottom:"3em"}}>
   <Grid item  className={classes.textContainer2} >
  <Grid item container justify="center">
       <img src={auto} alt="About Us" className={classes.vectorImage}/>
   </Grid>
    <Grid item container justify="center">
    <Typography className={classes.Header}  style={{padding:"1em",color:"grey"}}>
    HOW DO WE WORKS ?
    </Typography>
    <Typography className={classes.Content} style={{paddingBottom:"3em",color:"grey"}}>
  
  <p>AIFINDSJOB connects professional and skilled employees with employers in need of their skills.
     We integrate AI technology for detailed screening and hiring procedures to ensure an effective 
     match, which separates us from other staffing agencies. Once we know the capabilities of an applicant,
     we find them job opportunities that complement their skills and provide an ideal solution for applicant
     and employer.
</p>  
 </Typography>
  </Grid>
</Grid>  
   </Grid>



{/* PAPERS */}

<Grid container className={classes.paperContainer} style={{marginTop:"5em"}}justify="center">
  <Grid item  container justify="center">
    <Grid item className={classes.paperItems}>
    <Paper className={classes.papers} style={{paddingTop:"3em"}}>
    <AccountIcon className={classes.icons} />
    <Typography className={classes.Header} style={{color:"black"}}> Learn more About us</Typography>
    <Typography className={classes.details} style={{color:"grey",fontSize:"1em"}}>
      <p>
        Whether you’re looking for work or seeking workers for your business, If you don’t see exactly
        what you’re looking for, just ask us. We'll get the best people for you. 
      </p>
    </Typography>
    <Link to="/About">
      <Button className={classes.button}>
        LEARN MORE
      </Button>
    </Link>
    </Paper>
  </Grid>


  <Grid item className={classes.paperItems} >
    <Paper className={classes.papers} justify="center" style={{paddingTop:"3em"}} >
      <LoginIcon className={classes.icons}/>
    <Typography className={classes.Header} style={{color:"black"}}> Register Now </Typography>
    <Typography className={classes.details} style={{color:"grey",fontSize:"1em"}}>
      <p>
        It's perhaps the best time to take action. Register now to learn about how to solve your
        problems from our experts. We ensure that each candidate reaches the appropriate level of
        expertise you need.
      </p>
    </Typography>
      <Link to="/Register">
        <Button className={classes.button}>
          LEARN MORE
        </Button>
      </Link>
    </Paper>
  </Grid>
</Grid>
</Grid>


  </>
);
}