import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';

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
    width:900,
    height:600,

   [theme.breakpoints.down("sm")]:{
    paddingLeft:"3.5em",
    paddingRight:"3.5em",
    width:600,
    },
    [theme.breakpoints.down("xs")]:{
    paddingLeft:"3.5em",
    paddingRight:"3.5em",
    width:300,
    },
  },

}));

export default function Update ()
{
     const classes=useStyles();
return(
<Grid container className={classes.paperContainer}>
        <Grid item className={classes.paperItem} justify="center">
          <Paper className={classes.paper} elevation={4} justify="center"> 
      
        <Grid item container justify="center">
          
           <Typography style={{textAlign:"center",fontSize:20,color:"#171a3d",fontWeight:500}} > ACCOUNT SETTINGS</Typography>
     
      </Grid>

        <Grid item container style={{paddingTop:"5em"}} justify="center">
            <Grid item xs={12} sm={6} style={{float:"left"}}>
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>Name:</Typography></Grid>
            <Grid item xs={12} sm={6} style={{float:"right"}}>
          <a href=""
            style={{
              float: "right",
              color: "#2e4d9f",
              fontSize: 14,
              fontWeight: "bold"
            }}
          >
            {" "}
            <Link to="/change name"> Change Name</Link>
          </a></Grid>
          </Grid>
          <hr />
           <Grid item container >
          <Grid item xs={12} sm={6} style={{float:"left"}}>
          <Typography style={{ fontWeight: "bold",color:"black", fontSize:14,float:"left" }}>Email:</Typography></Grid>
        <Grid item xs={12} sm={6} style={{float:"right"}}>
         <a href=""
            style={{
              float: "right",
              color: "#2e4d9f",
              fontSize: 14,
              fontWeight: "bold"
            }}
          >
          
            {" "}
            <Link to="/email"> Change email </Link>
          </a></Grid>
          </Grid>
          <hr />
           <Grid item container justify="center" >
               <Grid item xs={12} sm={6} style={{float:"left"}}>
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>
            Password:
          </Typography></Grid>
            <Grid item xs={12} sm={6} style={{float:"right"}}>
          <a href=""
            style={{
              float: "right",
              color: "#2e4d9f",
              fontSize: 14,
              fontWeight: "bold"
            }}
          >
            {" "}
            <Link to="/password">Change password</Link>
          </a></Grid>
          </Grid>
          <hr />
           <Grid item container justify="center">
               <Grid item xs={12} sm={6} style={{float:"left"}}>
          <Typography style={{ fontWeight: "bold",color:"black", fontSize:14,float:"left" }}>Phone:</Typography></Grid>
            <Grid item xs={12} sm={6} style={{float:"right"}}>
          <a href=""
            style={{
              float: "right",
              color: "#2e4d9f",
              fontSize: 14,
              fontWeight: "bold"
            }}
          >
            {" "}
            <Link to="/phone">Add a number</Link>
          </a></Grid>
          </Grid>
          <hr />
           <Grid item container justify="center">
               <Grid item xs={12} sm={6} style={{float:"left"}}>
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>
            2-step verification:
          </Typography></Grid>
            <Grid item xs={12} sm={6} style={{float:"right"}}>
          <a href=""
            style={{
              float: "right",
              color: "#2e4d9f",
              fontSize: 14,
              fontWeight: "bold"
            }}
          >
            {" "}
            <Link to="/verification">Activate </Link>
          </a></Grid>
          </Grid>
          <hr />
         <Grid item container justify="center">
             <Grid item xs={12} sm={6} style={{float:"left"}}>
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>
            User
          </Typography></Grid>
            <Grid item xs={12} sm={6} style={{float:"right"}}>
          <a href=""
            style={{
              float: "right",
              color: "#2e4d9f",
              fontSize: 14,
              fontWeight: "bold"
            }}
          >
            {" "}
            <Link to="/login">Logout</Link>
          </a></Grid>
       </Grid>
          </Paper>
          </Grid>
          </Grid>
);
}