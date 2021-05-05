import React from "react";
//import { Link } from "react-router-dom";
//import axios from "axios";
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

class ViewProfile extends React.Component
{    
   constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/viewprofile')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render(){
    const classes=useStyles();      
    return (
     
     <Grid container className={classes.paperContainer}>
        <Grid item className={classes.paperItem} justify="center">
          <Paper className={classes.paper} elevation={4} justify="center"> 
      
        <Grid item container justify="center">
          
           <Typography style={{textAlign:"center",fontSize:20,color:"#171a3d",fontWeight:500}} > YOUR PROFILE</Typography>
     
      </Grid>

        <Grid item container style={{paddingTop:"5em"}} justify="center">
            <Grid item xs={12} sm={6} >
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>First Name:</Typography></Grid>
          <hr />
            <Grid item xs={12} sm={6} >
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>Last Name:</Typography></Grid>
          <hr />
            <Grid item xs={12} sm={6} >
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>Address:</Typography></Grid>
          <hr />
            <Grid item xs={12} sm={6} >
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>Phone:</Typography></Grid>
          <hr />
            <Grid item xs={12} sm={6} >
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>Email:</Typography></Grid>
          <hr />
           <Grid item xs={12} sm={6}>
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>Photo:</Typography></Grid>
          <hr />
           <Grid item xs={12} sm={6} >
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>Qualification:</Typography></Grid>
          <hr />
           <Grid item xs={12} sm={6}>
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>City:</Typography></Grid>
          <hr />
           <Grid item xs={12} sm={6} >
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>State:</Typography></Grid>
          <hr />
           <Grid item xs={12} sm={6} >
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>Designation:</Typography></Grid>
          <hr />
           <Grid item xs={12} sm={6} >
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>Experience:</Typography></Grid>
          <hr />
           <Grid item xs={12} sm={6} >
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>Skills:</Typography></Grid>
          <hr />
           <Grid item xs={12} sm={6} >
          <Typography style={{ fontWeight: "bold",color:"black", fontSize: 14,float:"left" }}>Project:</Typography></Grid>
          <hr />          
    </Grid>
    </Paper>
    </Grid>    
    </Grid>
    );
    }
  }


export default ViewProfile;
