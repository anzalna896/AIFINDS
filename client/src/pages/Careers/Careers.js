import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

import hero from './images/banner.jpg';

const useStyles = makeStyles(theme => ({
  heroContainer:{
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


  captionContainer:{
    paddingLeft:"5em",
    paddingRight:"5em",
    marginTop:150,
    textAlign:"center",

    [theme.breakpoints.down("md")]:{
     width:'100%',
    },

    [theme.breakpoints.down("sm")]:{
      textAlign:"center",
      paddingLeft:"1.5em",
      paddingRight:"1.5em",
      width:'100%',
    },

    [theme.breakpoints.down("xs")]:{
      textAlign:"center",
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
    fontStyle:"italic",

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

titleContainer:{
    paddingLeft:"5em",
    paddingRight:"5em",
    fontSize:"2.5em",
    marginTop:20,
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

  Header:{
  color:"#304B83",
  fontSize:"0.8em",
  textAlign:"center",
  [theme.breakpoints.down("xs")]:{
   alignItems:'center',
   lineHeight:1,
  }
},


   cardContainer:{
   alignItems:"center",
   justifyContent:"center",
   marginTop:"2em",
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
    margin:"1em",
  },

  root: {
    flexGrow: 1
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },

  card: {
    maxWidth: 345
  },
  media: {
    height: 230
  }
}));

export default function Careers() {
  const classes = useStyles();

  return (
    <>
    {/* BANNER*/}
    <div>

    <Grid className={classes.heroContainer} >
       <Grid item container justify="center" className={classes.captionContainer} >
           <Grid item container justify="center">
          <Typography variant="h3" style={{color:"white"}}>
             <p>FIND JOBS BY DEPARTMENT</p>
          </Typography>
        </Grid>
      <Grid item container justify="center">
          <Typography className={classes.captionStatement}>
             <p>We connect the right candidates with the right jobs</p>
          </Typography></Grid>
       </Grid>   
     </Grid>
    </div>

       <Grid container className={classes.cardContainer}>
          <Grid item container justify="center" className={classes.titleContainer}>
           <Typography className={classes.Header}>OUR TEAMS</Typography>
          </Grid>
         <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://inteng-storage.s3.amazonaws.com/img/iea/QjOdqW0AGd/sizes/computer-eng-salaries-worldwide_resize_md.jpg"
                  title="ET"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Engineering and Technology
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify"}}
                  >
                   The career opportunities for engineering graduates are wide and varied, although you may wish
                   to choose the career most relevant to your engineering specialization. AIFINDSJOB helps you to
                   explore your dream career in engineering that best suits you
                  </Typography>
                </CardContent>
              </CardActionArea>
             
            </Card>
          </Grid>

          <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://ctmlabelingsystems.com/wp-content/uploads/2017/01/47872735_m-847x480.jpg"
                  title="sales"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Business Development / Sales
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify"}}
                  >
                    Looking out for a career in business development/sales where you can utilize your skills
                    and education to contribute to the outstanding success of the organization? With AIFINDSJOB
                    explore your dream job.

                  </Typography>
                </CardContent>
              </CardActionArea>
             
            </Card>
          </Grid>

          <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.efficiencyservicesgroup.com/wp-content/uploads/AdobeStock_140080860_CROPPED-1600x900.png"
                  title="MC"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   Quality/Testing
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify"}}
                  >
                  Quality Assurance/ software tester Implements test plan to test existing and new software, debug code, 
                  and improve the usability of the software programs. If you are competent in executing test cases and 
                  passionate about quality, explore these related job titles with AIFINDSJOB.                
                  </Typography>
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>

           <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="http://marketingon.org/wp-content/uploads/2019/01/Diseno-grafico.jpg"
                  title="design"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    IT/Software Jobs
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify"}}
                  >
                    Software engineers are increasingly in demand. Are you looking to get your first or next
                    job in the world of software engineering? Be ready for a software engineer role with all the
                    right skills and explore opportunities with AIFINDSJOB.
                  </Typography>
                </CardContent>
              </CardActionArea>
             
            </Card>
          </Grid>

           <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="http://www.profitbuilderhd.com/wp-content/uploads/2015/12/T%C5%82o_zz-700x350.jpg"
                  title="business"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   IT/Hardware or Networking Jobs
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify"}}
                  >
                    Are you a person with a good understanding of hardware and network infrastructure? 
                    IT pros proficient in the areas of networking are always in demand in trending marketplaces.
                    Expand your searches for the best hires with the help from AIFINDSJOB.
                  </Typography>
                </CardContent>
              </CardActionArea>
             
            </Card>
          </Grid>

          <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/908292/pexels-photo-908292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="finance"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Finance/Accounts/Investment Banking Job
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify"}}
                  >
                   The finance industry is broad and opportunities are wide-ranging.
                   Jobs in the finance industry are extremely lucrative, with entry qualifications as high
                   as entry-level salaries. Enter the world of investment banking or the financial markets with
                   AIFINDSJOB.
                  </Typography>
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>

            <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://hr.orgos.io/hubfs/main-functions-of-a-human-resource-department.jpg"
                  title="legal"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    HR / Recruitment / Administration
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify"}}
                  >
                   Prepared for a role as an Hr with strong interpersonal and communication skills and the
                   ability to build a strong force. Explore your next job opportunity on AIFINDSJOB
                  </Typography>
                </CardContent>
              </CardActionArea>
             
            </Card>
          </Grid>

            <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://informaconnect.com/article/images/cacheable/c8549133-48b2-407c-a66d-bfa47424367f-0-c9a3798e126ef8b09912c82db89b620b.jpg"
                  title="legal"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   Marketing/Advertising Jobs
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify"}}
                  >
                     Opportunities in the advertising marketing industry are increasing more than ever. Every qualified
                     potential candidate is always searching for the right job in this industry and AIFINDSJOB helps you
                     to achieve your goal.
                  </Typography>
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>

          <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.mrinjurylawyerny.com/wp-content/uploads/2019/02/law-office-fein-dl-02-e1490129460571.jpg"
                  title="legal"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   Graphic Design/Web Design/Copywriting Jobs
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify"}}

                  >
                   Web or graphic designers create the look and feel of a website with a clean and artful web design.
                   Having a bachelor’s degree in the related field which can include web design, graphic design experience,
                   or working for a creative agency is more helpful for increasing job prospects.
                  </Typography>
                </CardContent>
              </CardActionArea>
             
            </Card>
          </Grid>
        </Grid>
    </>
  );
}



