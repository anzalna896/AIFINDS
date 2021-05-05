import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";


/* Top EMployers */
import google from './employers/google.png';
import microsoft from './employers/microsoft.png';
import air from './employers/air.png';
import cisco from './employers/cisco.png';
import ey from './employers/ey.png';
import oracle from './employers/Oracle.png';
import intel from './employers/intel.png';
import hcl from './employers/HCL.jpg';
import kpmg from './employers/KPMG.jpg';
import fed from './employers/fed.png';
import merck from './employers/Merck.png';
import tata from './employers/TATA.jpg';
import wipro from './employers/WIPRO.jpg';
import deloitte from './employers/deloitte.png';
import amazon from './employers/Amazon.jpg';
import hp from './employers/hp.png';
import yahoo from './employers/yahoo.png';
import xerox from './employers/xerox.png';
import dell from './employers/dell.png';
import siemens from './employers/siemens.png';
import infosys from './employers/infosys.png';
import accenture from './employers/accenture.png';
import fb from './employers/facebook.png';
import fk from './employers/Flipkart.jpg';


/* Top Consultants */
import abc from './consultants/abc.jpg';
import ibm from './consultants/ibm.png';
import adecco from './consultants/adecco.png';
import atkins from './consultants/atkins.png';
import bcg from './consultants/bcg.png';
import mc from './consultants/mc.png';
import cg from './consultants/cg.png';
import baringa from './consultants/baringa.jpg';
import ow from './consultants/ow.png';
import bc from './consultants/bc.png';
import lek from './consultants/lek.png';
import mh from './consultants/mh.png';

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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  cardContainer:{
 
   padding:"1em",
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

  logoImage:{
    width:"10%",
    height:"10%",
    margin:"1em",
   [theme.breakpoints.down("sm")]:{
      width:"15%",
      height:"15%"
    },

     [theme.breakpoints.down("xs")]:{
      width:"15%",
      height:"15%"
      }
  },

  cardItem:{
    margin:"1em",
  },


 card: {
   maxWidth: 200,
   height:350,
   borderRadius:20,
  },


  media: {
    height: 80,
  },

  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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
          <Tab label="Top Employers" {...a11yProps(0)} />
          <Tab label="Top Consultants" {...a11yProps(1)} />
          <Tab label="Achievements" {...a11yProps(2)} />
        </Tabs>

      </AppBar>


      <TabPanel value={value} index={0}>

        <div className={classes.root}>
         <Grid container className={classes.cardContainer} justify="center">
           <img src={google} className={classes.logoImage} alt="google"/>
           <img src={ey} className={classes.logoImage} alt="ey"/>
           <img src={merck} className={classes.logoImage} alt="merck"/>
           <img src={microsoft} className={classes.logoImage} alt="ms"/>
           <img src={intel} className={classes.logoImage} alt="intel"/>
           <img src={oracle} className={classes.logoImage} alt="oracle"/>
           <img src={wipro} className={classes.logoImage} alt="wipro"/>
           <img src={air} className={classes.logoImage} alt="air"/>
           <img src={deloitte} className={classes.logoImage} alt="dlt"/>
           <img src={kpmg} className={classes.logoImage} alt="kpmg"/>
           <img src={accenture} className={classes.logoImage} alt="accenture"/>
           <img src={fk} className={classes.logoImage} alt="fk"/>
           <img src={amazon} className={classes.logoImage} alt="az"/>
           <img src={cisco} className={classes.logoImage} alt="cisco"/>
           <img src={hcl} className={classes.logoImage} alt="hcl"/>
           <img src={fed} className={classes.logoImage} alt="fed"/>
           <img src={tata} className={classes.logoImage} alt="tcs"/>
           <img src={fb} className={classes.logoImage} alt="fb"/>
           <img src={hp} className={classes.logoImage} alt="hp"/>
           <img src={yahoo} className={classes.logoImage} alt="yahoo"/>
           <img src={xerox} className={classes.logoImage} alt="xerox"/>
           <img src={dell} className={classes.logoImage} alt="dell"/>
           <img src={siemens} className={classes.logoImage} alt="siemens"/>
           <img src={infosys} className={classes.logoImage} alt="infosys"/>
          </Grid>

        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.root}>
          <Grid container className={classes.cardContainer} justify="center">
           <img src={abc} className={classes.logoImage} alt="abc"/>
           <img src={adecco} className={classes.logoImage} alt="adecco"/>
           <img src={ey} className={classes.logoImage} alt="ey"/>
           <img src={ibm} className={classes.logoImage} alt="ibm"/>
           <img src={atkins} className={classes.logoImage} alt="atkins"/>
           <img src={bc} className={classes.logoImage} alt="bc"/>
           <img src={accenture} className={classes.logoImage} alt="accenture"/>
           <img src={kpmg} className={classes.logoImage} alt="kpmg"/>
           <img src={bcg} className={classes.logoImage} alt="bcg"/>
           <img src={lek} className={classes.logoImage} alt="lek"/>
           <img src={ow} className={classes.logoImage} alt="ow"/>
           <img src={deloitte} className={classes.logoImage} alt="dlt"/>
           <img src={cg} className={classes.logoImage} alt="cg"/>
           <img src={mc} className={classes.logoImage} alt="mc"/>
           <img src={baringa} className={classes.logoImage} alt="baringa"/>
           <img src={mh} className={classes.logoImage} alt="mh"/>
           
          </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/5918618/600/400/m2/fpnw/wm1/p669uuarro8af5yxjmmqhmdwwo5adsef4iczhtscfcky8kkxn1mohv6suyd5cxlb-.jpg?1550653902&s=10b0e461313baaef4cefa45b1dba75dc"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Alpha
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Achievement of the year
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </TabPanel>
    </div>
  );
}