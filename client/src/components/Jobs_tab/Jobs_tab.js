import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
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
    paddingTop:"1em",
    margin:"1em",
    alignItems:"center",
    justifyContent:"center",

  },


  papers: {
   width: 300,
   height:250,
  },

  paper: {
    height: 160,
    width: 100
  },
 
}));

export default function SimpleTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Industry" {...a11yProps(0)} />
          <Tab label="Department" {...a11yProps(1)} />
          <Tab label="Location" {...a11yProps(2)} />
          <Tab label="Designation" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div>
          <Grid container className={classes.paperContainer} >
            <Grid item className={classes.paperItem}>
              <Paper className={classes.papers} style={{textAlign:"justify",paddingTop:"1em"}}>
              <ul>
                <li>
                  <a>IT-software jobs</a>
                </li>
                <li>
                  <a>Recruitment Service Jobs</a>
                </li>
                <li>
                  <a>Manufacturing Jobs</a>
                </li>
                <li>
                  <a>BPO/Call center jobs</a>
                </li>
                <li>
                  <a>Education / Training Jobs</a>
                </li>
                <li>
                  <a>Banking/ Financial services jobs</a>
                </li>
                <li>
                  <a>Management consulting jobs</a>
                </li>
                <li>
                  <a>Aviation / Airline jobs</a>
                </li>
                <li>
                  <a>Medical / Healthcare jobs</a>
                </li>
                <li>
                  <a>Hotel / Restaurant jobs</a>
                </li>
              </ul></Paper>
            </Grid>

            <Grid item justify="center" className={classes.paperItem}>
              <Paper className={classes.papers} style={{textAlign:"justify",paddingTop:"1em"}}>
              <ul>
                <li>
                  <a>Media Entertainment jobs</a>
                </li>
                <li>
                  <a>Telecom / ISP jobs</a>
                </li>
                <li>
                  <a>Insurance jobs</a>
                </li>
                <li>
                  <a>IT hardware / Networking jobs</a>
                </li>
                <li>
                  <a>FMCG / F&B jobs</a>
                </li>
                <li>
                  <a>Engineering / Construction jobs</a>
                </li>
                <li>
                  <a>NBFC jobs</a>
                </li>
                <li>
                  <a>Oil and gas / Petroleum jobs</a>
                </li>
                <li>
                  <a>Pharma / Biotech jobs</a>
                </li>
                <li>
                  <a>Advertising/MR/PR jobs</a>
                </li>
              </ul></Paper>
            </Grid>

            <Grid item justify="center" className={classes.paperItem}>
              <Paper className={classes.papers} style={{textAlign:"justify",paddingTop:"1em"}}>
              <ul>
                <li>
                  <a>Automobile /Auto ancillaries jobs</a>
                </li>
                <li>
                  <a>Consumer durables / Electronic jobs</a>
                </li>
                <li>
                  <a>Real Estate jobs</a>
                </li>
                <li>
                  <a>Cement / Building material jobs</a>
                </li>
                <li>
                  <a>Retail jobs</a>
                </li>
                <li>
                  <a>Internet / E-commerce jobs</a>
                </li>
                 <li>
                  <a>Textile jobs</a>
                </li>
                <li>
                  <a>Chemical jobs</a>
                </li>
                <li>
                  <a>Logistics /Courier jobs</a>
                </li>
                <li>
                  <a>Tourism jobs</a>
                </li>
               
              </ul></Paper>
            </Grid>
          </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <Grid container className={classes.paperContainer}>
            <Grid item className={classes.paperItem}>
              <Paper className={classes.papers} style={{textAlign:"justify",paddingTop:"1em"}}>
              <ul>
                <li>
                  <a>IT-software jobs</a>
                </li>
                <li>
                  <a>Sales /BD jobs</a>
                </li>
                <li>
                  <a>Customer service jobs</a>
                </li>
                <li>
                  <a>Product /Maintenance jobs</a>
                </li>
                <li>
                  <a>Finance/Accounts jobs</a>
                </li>
                <li>
                  <a>Education /Training jobs</a>
                </li>
                <li>
                  <a>Hotel/Restaurant jobs</a>
                </li>
                <li>
                  <a>Marketing /Advertising jobs</a>
                </li>
                <li>
                  <a>Travel / Aviation jobs</a>
                </li>
              </ul></Paper>
            </Grid>

            <Grid item className={classes.paperItem}>
              <Paper className={classes.papers} style={{textAlign:"justify",paddingTop:"1em"}}>
              <ul>
                <li>
                  <a>Administration/Front office jobs</a>
                </li>
                <li>
                  <a>Medical / Health-care jobs</a>
                </li>
                <li>
                  <a>Engineering design/Construction</a>
                </li>
                <li>
                  <a>IT-Hardware / Networking jobs</a>
                </li>
                <li>
                  <a>Graphic design /Web design jobs</a>
                </li>
                <li>
                  <a>Statistics//Analytics jobs</a>
                </li>
                <li>
                  <a>Oil and gas / Petroleum jobs</a>
                </li>
                <li>
                  <a>Supply chain/ Purchase jobs</a>
                </li>
                <li>
                  <a>Advertising/MR/PR/Events jobs</a>
                </li>
              </ul></Paper>
            </Grid>

            <Grid item className={classes.paperItem}>
              <Paper className={classes.papers} style={{textAlign:"justify",paddingTop:"1em"}}>
              <ul>
                <li>
                  <a>Journalism jobs</a>
                </li>
                <li>
                  <a>Other jobs</a>
                </li>
                <li>
                  <a>SBO head/ CEO / Director jobs</a>
                </li>
                <li>
                  <a>TV / film / Radio jobs</a>
                </li>
                <li>
                  <a>R&D / Product design jobs</a>
                </li>
                <li>
                  <a>Textile jobs</a>
                </li>
                <li>
                  <a>Chemical jobs</a>
                </li>
                <li>
                  <a>Logistics / Courier jobs</a>
                </li>
                <li>
                  <a>Travel /Tourism jobs</a>
                </li>
              </ul></Paper>
            </Grid>
          </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <Grid container className={classes.paperContainer}>
            <Grid item className={classes.paperItem}>
              <Paper className={classes.papers} style={{textAlign:"justify",paddingTop:"1em"}}>
                <ul>
                <li>
                  <a>Delhi jobs</a>
                </li>
                <li>
                  <a>Pune jobs</a>
                </li>
                <li>
                  <a>Noida jobs</a>
                </li>
                <li>
                  <a>Ahmedabad jobs</a>
                </li>
                <li>
                  <a>Coimbatore jobs</a>
                </li>
              </ul></Paper>
            </Grid>

            <Grid item className={classes.paperItem}>
              <Paper className={classes.papers} style={{textAlign:"justify",paddingTop:"1em"}}>
              <ul>
                <li>
                  <a>Mumbai jobs</a>
                </li>
                <li>
                  <a>Gargoon jobs</a>
                </li>
                <li>
                  <a>Hyderabad jobs</a>
                </li>
                <li>
                  <a>Manipal jobs</a>
                </li>
                <li>
                  <a>Jamshedpur jobs</a>
                </li>
                <li>
                  <a>Kharagpur jobs</a>
                </li>
              </ul></Paper>
            </Grid>

            <Grid item className={classes.paperItem}>
              <Paper className={classes.papers} style={{textAlign:"justify",paddingTop:"1em"}}>
              <ul>
                <li>
                  <a>Bangalore jobs</a>
                </li>
                <li>
                  <a>Chennai jobs</a>
                </li>
                <li>
                  <a>Kolkata jobs</a>
                </li>
                <li>
                  <a>Gurgaon jobs</a>
                </li>
                <li>
                  <a>Calicut jobs</a>
                </li>
                <li>
                  <a>Kochi jobs</a>
                </li>
                <li>
                  <a>Tiruchipalli jobs</a>
                </li>
              </ul></Paper>
            </Grid>
          </Grid>
        </div>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <div>
          <Grid container className={classes.paperContainer}>
            <Grid item className={classes.paperItem}>
              <Paper className={classes.papers} style={{textAlign:"justify",paddingTop:"1em"}}>
              <ul>
                <li>
                  <a>Business Analyst Jobs</a>
                </li>
                <li>
                  <a>Software Engineer Jobs</a>
                </li>
                <li>
                  <a>Pharmacist Jobs</a>
                </li>
                <li>
                  <a>Java Developer Jobs</a>
                </li>
                <li>
                  <a>Project Manager Jobs</a>
                </li>
                <li>
                  <a>Hr Executive Jobs</a>
                </li>
                <li>
                  <a>Assistant Professor Jobs</a>
                </li>
              </ul></Paper>
            </Grid>

            <Grid item className={classes.paperItem}>
              <Paper className={classes.papers} style={{textAlign:"justify",paddingTop:"1em"}}>
              <ul>
                <li>
                  <a>Software Developer Jobs</a>
                </li>
                <li>
                  <a>Data Analyst Jobs</a>
                </li>
                <li>
                  <a>Company Secretary Jobs</a>
                </li>
                <li>
                  <a>Computer Operator Jobs</a>
                </li>
                <li>
                  <a>Supervisor Jobs</a>
                </li>
                <li>
                  <a>Police Jobs</a>
                </li>
                <li>
                  <a>Receptionist Jobs</a>
                </li>
              </ul></Paper>
            </Grid>

            <Grid item className={classes.paperItem}>
              <Paper className={classes.papers} style={{textAlign:"justify",paddingTop:"1em"}}>
              <ul>
                <li>
                  <a>Teaching Jobs</a>
                </li>
                <li>
                  <a>Android Developer Jobs</a>
                </li>
                <li>
                  <a>Network Engineer Jobs</a>
                </li>
                <li>
                  <a>Data Entry Operator Jobs</a>
                </li>
                <li>
                  <a>Air Hostess Job</a>
                </li>
                <li>
                  <a>Chartered Accountant Jobs</a>
                </li>
              </ul></Paper>
            </Grid>
          </Grid>
        </div>
      </TabPanel>
    </div>
  );
}
