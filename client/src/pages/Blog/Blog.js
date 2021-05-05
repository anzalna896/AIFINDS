
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from '@material-ui/core/Divider';
//import Hidden from "@material-ui/core/Hidden";
//import Link from "@material-ui/core/Link";
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
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
    color:'#171a3d',
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

  
   cardContainer:{
   alignItems:"center",
   justifyContent:"center",
   marginTop:"2em",
   marginBottom:"2em",
   width:'100%',
 
    [theme.breakpoints.down("sm")]:{
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    [theme.breakpoints.down("xs")]:{
    paddingLeft:"1em",
    paddingRight:"1em"
    }
  },

  cardItem:{
    margin:"1em",
    '&:hover':{
    boxShadow:theme.shadows[15]
        },
  },

   card: {
    maxWidth: 400
  },
  media: {
    height: 230
  }
}));


  

export default function Blog() {
  const classes = useStyles();

  return (
    <>
    <Grid className={classes.heroContainer} >
       <Grid item container justify="center" className={classes.captionContainer} >
           <Grid item container justify="center">
          <Typography variant="h3" style={{color:"#171a3d"}}>
             <p>WE START WITH YOU</p>
          </Typography>
        </Grid>
      <Grid item container justify="center">
          <Typography className={classes.captionStatement}>
             <p> AIFindsJob makes the most of AI to find your job easy and solve
                    social problems</p>
          </Typography>
          </Grid>
       </Grid>   
     </Grid>

      <Grid container className={classes.cardContainer}>
          
         <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea component="a" href="https://codete.com/blog/how-artificial-intelligence-can-help-us-solve-social-issues/">
                <CardMedia
                  className={classes.media}
                  image="https://image.freepik.com/free-vector/ai-artificial-intelligence-machine-learning-background_127544-409.jpg"
                  title="ET"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{color:"#304B83"}}>
                    AI - The Future of Automation of your Works and your Living.
                  </Typography>
                  <Typography>
                    July 03, 2020
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify",marginTop:"1em",fontSize:15}}
                  >
                    These 5 startups are making the most of AI to solve social problems.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
               <IconButton aria-label="comment" >
                 <ChatBubbleOutlineIcon size="small" color="primary"/>
               </IconButton> 
               <Typography>Comments</Typography>
                <Divider orientation="vertical" flexItem />
                <IconButton aria-label="comment" >
                  <ThumbUpAltIcon size="small" color="primary"/>
                </IconButton>
                <Typography>Likes</Typography>
              </CardActions>
            </Card>
          </Grid>


           <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea component="a" href="#">
                <CardMedia
                  className={classes.media}
                  image="https://images.squarespace-cdn.com/content/v1/590cb4796b8f5bfe3f3ed65c/1531852977268-3NQ7BD52S6DK0U8JU7FC/ke17ZwdGBToddI8pDm48kH6heqd7-ZnAF34D7h4Neq17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hveExjbswnAj1UrRPScjfCtD75E8V0LTfXSmTMOcFJ7aA4qwAgMYABsyZawP0XjzA/Where+We+Are+Investing+Now+DNVB.jpg"
                  title="ET"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{color:"#304B83"}}>
                   Searching for Job When You Have No Time
                  </Typography>
                  <Typography>
                    July 18, 2020
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify",marginTop:"1em",fontSize:15}}
                  >
                    You’re committed to your job search, and you use every ounce of your free time with us .
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
               <IconButton aria-label="comment" >
                 <ChatBubbleOutlineIcon size="small" color="primary"/>
               </IconButton> 
               <Typography>Comments</Typography>
                <Divider orientation="vertical" flexItem />
                <IconButton aria-label="comment" >
                  <ThumbUpAltIcon size="small" color="primary"/>
                </IconButton>
                <Typography>Likes</Typography>
              </CardActions>
            </Card>
          </Grid>

           <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea component="a" href="#">
                <CardMedia
                  className={classes.media}
                  image="https://livedemo00.template-help.com/wt_prod-3867/images/blog-2-369x253.jpg"
                  title="ET"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{color:"#304B83"}}>
                   How to Find a Business Development Job
                  </Typography>
                  <Typography>
                    July 26, 2020
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify",marginTop:"1em",fontSize:15}}
                  >
                   Business development professionals are at the heart of all sorts of organizations, from startups to.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
               <IconButton aria-label="comment" >
                 <ChatBubbleOutlineIcon size="small" color="primary"/>
               </IconButton> 
               <Typography>Comments</Typography>
                <Divider orientation="vertical" flexItem />
                <IconButton aria-label="comment" >
                  <ThumbUpAltIcon size="small" color="primary"/>
                </IconButton>
                <Typography>Likes</Typography>
              </CardActions>
            </Card>
          </Grid>

           <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea component="a" href="#">
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  title="ET"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{color:"#304B83"}}>
                   Organize Your Workspace with Alpha
                  </Typography>
                  <Typography>
                   August O2, 2020
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify",marginTop:"1em",fontSize:15}}
                  >
                    What’s the hardest working location in your house? If you’re like many workers, it’s your office .
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
               <IconButton aria-label="comment" >
                 <ChatBubbleOutlineIcon size="small" color="primary"/>
               </IconButton> 
               <Typography>Comments</Typography>
                <Divider orientation="vertical" flexItem />
                <IconButton aria-label="comment" >
                  <ThumbUpAltIcon size="small" color="primary"/>
                </IconButton>
                <Typography>Likes</Typography>
              </CardActions>
            </Card>
          </Grid>

           <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea component="a" href="#">
                <CardMedia
                  className={classes.media}
                  image="https://livedemo00.template-help.com/wt_prod-3867/images/blog-5-369x253.jpg"
                  title="ET"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{color:"#304B83"}}>
                    Find a Remote editing job .
                  </Typography>
                  <Typography>
                    Aug 10, 2020
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify",marginTop:"1em",fontSize:15}}
                  >
                   We focus  on members who found remote editing jobs, allowing them to work .
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
               <IconButton aria-label="comment" >
                 <ChatBubbleOutlineIcon size="small" color="primary"/>
               </IconButton> 
               <Typography>Comments</Typography>
                <Divider orientation="vertical" flexItem />
                <IconButton aria-label="comment" >
                  <ThumbUpAltIcon size="small" color="primary"/>
                </IconButton>
                <Typography>Likes</Typography>
              </CardActions>
            </Card>
          </Grid>

           <Grid item className={classes.cardItem}>
            <Card className={classes.card}>
              <CardActionArea component="a" href="#">
                <CardMedia
                  className={classes.media}
                  image="https://livedemo00.template-help.com/wt_prod-3867/images/blog-6-369x253.jpg"
                  title="ET"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{color:"#304B83"}}>
                    Online Teaching: Theory and Basics
                  </Typography>
                  <Typography>
                    Aug 23, 2020
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{textAlign:"justify",marginTop:"1em",fontSize:15}}
                  >
                    Have you been considering an online teacher job but don’t know exactly how to get started? A great first  .
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
               <IconButton aria-label="comment" >
                 <ChatBubbleOutlineIcon size="small" color="primary"/>
               </IconButton> 
               <Typography>Comments</Typography>
                <Divider orientation="vertical" flexItem />
                <IconButton aria-label="comment" >
                  <ThumbUpAltIcon size="small" color="primary"/>
                </IconButton>
                <Typography>Likes</Typography>
              </CardActions>
            </Card>
          </Grid>
          </Grid>
          </>
  );
}