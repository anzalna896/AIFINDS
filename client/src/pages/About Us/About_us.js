import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Vision from '@material-ui/icons/Visibility';
import Mission from '@material-ui/icons/GpsFixed';
import Plan from '@material-ui/icons/Assignment';

import four from './images/four.jpg';
import five from './images/five.jpg';
import hero from './images/about-us.jpg';
import team1 from './images/team1.jpg';
import team2 from './images/team2.jpg';
import team3 from './images/team3.jpg';


const useStyles=makeStyles(theme=>({

  Imagecontainer:{
    backgroundImage:`url(${hero})`,
    backgroundPosition:"center",
    overflow:'hidden',
    backgroundSize:"cover",
    backgroundRepeat:'no-repeat',
    minHeight:500,
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


  Container:{
    paddingLeft:"5em",
    paddingRight:"5em",
    marginTop:300,
    

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
    paddingTop:15,
    fontWeight:100,
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


Content:{
    backgroundColor:"white",
    textAlign:"justify",
    fontSize:"1.3em",
    fontWeight:300,
    lineHeight:1,
    padding:"4em",
    width:"100%",

    [theme.breakpoints.down("sm")]:{
    width:"100%",
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    
    [theme.breakpoints.down("xs")]:{
    width:"100%",
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    alignItems:"center",    },
},

  rowContainer:{
    backgroundColor:"white",
    paddingLeft:"5em",
    paddingRight:"5em",
    paddingTop:'3em',
    width:'100%',
    [theme.breakpoints.down("sm")]:{
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    [theme.breakpoints.down("xs")]:{
      width:"100%",
      paddingLeft:"1.5em",
      paddingRight:"1.5em"
      }
  },
  

  howContainer:{
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


  howParagraph:{
    fontWeight:300,
    fontSize:"1.3em",
    textAlign:'justify',
    paddingRight:"3em",
    paddingTop:"2em",

    [theme.breakpoints.down("sm")]:{
      paddingRight:"0",
      paddingBottom:'1em',
      paddingTop:'1em'
  }
},


paraImage:{
  paddingTop:'2em',
  overflow:'hidden',
  
  [theme.breakpoints.down("sm")]:{
    width:'100%'
  },
  
  [theme.breakpoints.down("xs")]:{
   width:'100%'
  },
},


whyusPara:{
  display:'flex',
  flexDirection:'row-reverse',
  [theme.breakpoints.down("sm")]:{
    display:'flex',
  flexDirection:'column-reverse',
},
},


whyParagraph:{
  fontWeight:300,
  fontSize:"1.3em",
  textAlign:'justify',
  paddingTop:'2em',
  paddingBottom:'2em',
  paddingLeft:"1em",
  
  [theme.breakpoints.down("sm")]:{
  paddingRight:'0',
  paddingLeft:"0",
  paddingBottom:'1em'
}
},


whyUs:{
  paddingTop:'1em',
  paddingLeft:'44em',
  [theme.breakpoints.down("sm")]:{
   alignItems:'center',
   paddingLeft:'1em',
  }
},


Header:{
  color:"white",
  fontSize:"0.8em",
  textAlign:"center",
  [theme.breakpoints.down("xs")]:{
   alignItems:'center',
   lineHeight:1,
  }
},


 paperContainer:{
   backgroundColor:"#e5e9f2",
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
   width: 320,
   borderRadius:"50%",
   height:320,
   textAlign:"center"
  },
 

  symbol:{
    marginTop:"1em",
    color:"white",
  },


  subtitle:{
    color:"white",
    fontSize:"1.5em",
    textAlign:"center",
    fontWeight:200,
    paddingTop:"1em",
  },


  text:{
    textAlign:"center",
    fontSize:"1.2em",
    color:"white",
    fontWeight:300,
    padding:"2em",
  },


titleContainer:{
    paddingLeft:"5em",
    paddingRight:"5em",
    fontSize:"2.5em",
    marginTop:10,
    fontWeight:100,
    color:'#FFFFFF',

    [theme.breakpoints.down("sm")]:{
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    [theme.breakpoints.down("xs")]:{
    paddingLeft:"1.5em",
    paddingRight:"1.5em"
    }
  },


 cardContainer:{
   backgroundColor:"#304B83",
   color:"white",
   alignItems:"center",
   justifyContent:"center",
   padding:"3em",
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


  cardItem:{
    marginTop:"5em",
    margin:"1em",
  },


 root: {
   width: 250,
   borderRadius:20,
  },


  media: {
    height: 250,
  },


  details:{
    textAlign:"center",
    fontSize:"0.9em",
  }

}));

export default function About(){

  const classes = useStyles();
return(
  <>
    <div>
     <Grid className={classes.Imagecontainer} >
        <Grid item container justify="center" className={classes.Container}>
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <Grid item >
          <Typography className={classes.missionStatement}>
             <p> Discover Your Bigger Future Here </p>
          </Typography>
        </Grid>
        </div>
        </Grid>              
     </Grid>
    </div>

  
      <Grid >
       
       <Typography  className={classes.Content}>
           <div data-aos="fade-up"  data-aos-duration="1500">
          <p>AIFINDSJOB is a comprehensive digital recruitment process for the people seeking their
             dream job and organization looking for a skilled and professional employee. In this 
             modern world there are plenty of opportunities for job seekers and also there are qualified
              candidates for the job recruiters to choose from. But these are unaware of those deserving
               candidates due to their scattered locations. So we decided to create a job portal to bring
                all the deserving candidates and job recruiters searching for the same under a single roof.</p> 

          <p>Our job portal is a platform for both job recruiters and job seekers to come together for the job
             recruitment process to a lot more simple and time-efficient. So for the employer and for the job seeker,
              it gets the job done. We are extremely happy that we are able of doing our part to give a boost to career
               growth for the right candidates and a better workplace for the organization..</p>
        </div>     
        </Typography>
        
      </Grid>


      <div>
        <Grid container className={classes.rowContainer} >
         <div data-aos="fade-up"  data-aos-duration="1500">
          <Grid item >
            
             <Typography variant="h4" gutterBottom  > 
               How does it works ?
             </Typography>
     
          </Grid>
  
          
          <Grid item className={classes.howContainer} >
            <Grid item container  >
              <Grid item>
                 <Typography variant="body1" className={classes.howParagraph} alignItems="center">
              
                   <p> Our job portal works in a very simple manner. That is if you are a recruiter or job seeker all
                      you need to do is simply register and sign in and that too which is absolutely free. We have
                       categorized all the jobs and grouped them under certain heads according to their field and industry.
                        This is how we are being a platform for the recruitment process to be simplified and rationalized to
                         save time and to streamline the right candidate for the right job.</p>

                       <p style={{fontSize:"1.4em",fontStyle:"bold"}}>
                          Who can use our job portal or job site?
                       </p>
                       <p> Our job portal can be used by both job recruiters to post job openings and job seekers to apply 
                         for these job openings. This is a great platform for both job seekers and job recruiters.
                        </p>
              
                    <p> At Alpha, we are one of the best job sites and we also have provisions that make it
                    possible for them to collect the required knowledge and background of each applicant. 
                    All the jobs are categorically organized in groups related to each field and industry. 
                    Career portals have aided numerous job seekers get suitable work and 
                    given a boost to their career growth.
                    So do not hesitate to explore your career opportunities with our portal and give your career
                    the elevation that you have always been waiting for.
                    </p> 
            
                 </Typography>
                </Grid>
              </Grid>

              <Grid item container justify="center" >
                <img src={four} alt="About Us" className={classes.paraImage} style={{maxHeight:"30em"}}/>
              </Grid>
      
             </Grid></div>
           </Grid>

  
  <Grid container className={classes.rowContainer} style={{paddingTop:'2em'}}>
    <div data-aos="fade-up"  data-aos-duration="1500">
      <Grid item className={classes.whyUs}>
        <Typography variant="h4" gutterBottom  > 
          Why AlFINDSJOB ?
        </Typography>
      </Grid>
     
      <Grid item className={classes.whyusPara} >
        <Grid item container  >
          <Grid item>
            <Typography variant="body1" className={classes.whyParagraph} alignItems="center">
             <p>At AIFINDSJOB, our leading-edge technology allows employers with suitable candidate
                profiles and also job seekers with suitable jobs on all parts of the industrial sectors
                 or competent levels. With our provisions, we can provide the required information and 
                 background of the company and candidate. We are helping recruiters not only for selecting
                  the right profile but much more than that. We are giving them the power to hire like no
                   one else.</p>
            <p>In this digital world both industries and business moving to mobile so we thought of having 
              a website that bridge the gap between both recruiters and job seekers to make recruitment process
               to be simplified with one-click application submission rather than having traditional method where
                it is very time-consuming .so don’t hesitate to have your dream job.</p>
           
              </Typography>
          </Grid>
      </Grid>
        
        <Grid item container justify="center" >
          <img src={five}  alt="About Us" className={classes.paraImage} style={{maxHeight:"30em"}}/>
        </Grid>
      
      </Grid></div>
</Grid>




<Grid container className={classes.paperContainer}>
 <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">

   <Grid item className={classes.paperItem}>
     <Paper className={classes.paper} elevation={4} style={{backgroundColor:"#e9734f"}}>
       <Vision className={classes.symbol}></Vision>
       <div className={classes.subtitle}>Our Vision</div>
       <Typography className={classes.text}>
         AIFINDSJOB will be the major worldwide comprehensive digital talent
          search platform for linking jobs and people.
       </Typography>
       </Paper>
   </Grid>
 </div>

 <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">

   <Grid item className={classes.paperItem}>
     <Paper className={classes.paper} elevation={4} style={{backgroundColor:"	#216cad"}}>
        <Mission className={classes.symbol}></Mission>
        <div className={classes.subtitle}>Our Mission</div>
        <Typography className={classes.text}>
       With our best in class Jobsite and leading technology, we generate and implement
        the finest recruitment channel for linking jobs and people; we endeavour 24*7 to 
        help customers to hire and find jobs.
       </Typography>
        </Paper>
   </Grid>
</div>

  
  <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
   <Grid item className={classes.paperItem}>
     <Paper className={classes.paper} elevation={4} style={{backgroundColor:"#272c49"}}>
        <Plan className={classes.symbol}></Plan>
      <div className={classes.subtitle}>Our Plan</div>
      <Typography className={classes.text}>
        Providing the proper channel for job talent search.
         We endow quality professionals for the modern connected world. 
       </Typography>
      </Paper>
   </Grid>  
   </div>
  </Grid>
 




<Grid container className={classes.cardContainer}>

 <Grid item container justify="center" className={classes.titleContainer}>
  <div className={classes.Header}>Our Team</div>
 </Grid>
 <div data-aos="fade-up"  data-aos-duration="500">
 <Grid item className={classes.cardItem}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={team1}
          title=""/>
        
        <CardContent>
          <Typography gutterBottom  align="center">
          <b><h3> Aneesh T</h3> </b>
          </Typography>
          <Typography className={classes.details}>
            Founder of Alpha Group
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
</div>

<div data-aos="fade-up"  data-aos-duration="1000">
  <Grid item className={classes.cardItem}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={team2}
          title=""
        />
        <CardContent>
          <Typography gutterBottom align="center">
           <b><h3>Shibi Shajahan</h3></b>
          </Typography>
          <Typography className={classes.details}>
            Founder of Alpha Group
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
</div>



<div data-aos="fade-up"  data-aos-duration="1500">
  <Grid item className={classes.cardItem}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={team3}
          title=""
        />
        <CardContent>
          <Typography gutterBottom align="center">
          <b><h3>Joseph Varghese</h3></b>
          </Typography>
          <Typography className={classes.details} >
            Project Manager & Marketing Head
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  </div>
</Grid>
​</div>
</>   
);
}