import React from 'react';
import { Link } from "react-router-dom";
import './Slider.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import one from './images/slide1.jpg'
import two from './images/slide2.jpg';
import three from './images/slide3.jpg';

class Slider extends React.Component {
  render() {
    return (
     <div className="slideshow">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
           tabIndex="-1"
        uk-slideshow="width:100%; height:100%;animation: fade; autoplay:'true'; autoplay-interval:2000"
        >
          <ul className="uk-slideshow-items">
            <li>
              <img
                src={one}
                alt=""
                uk-cover="true"
              />

               <div
                class="uk-overlay  uk-position-center uk-text-center">
                  
                <Typography class="head" >
                  BRING YOUR DETAILS TO US, WE BRING JOBS TO YOU
                </Typography>
                <Typography class="tag" >
                Your job is one search away   
                </Typography>
                <Link to="/Register">
                   <Button variant="outlined"
                     style={{
                      marginTop:"2em",
                      width:"16%",
                      height:"15%",
                      color: "white",
                      border:"1px solid white",
                      borderColor: "white",
                      background:"transparent",
                      
                    }}
                  >
                    REGISTER
                  </Button>
                </Link>
              </div>
            </li>


            <li>
              <img
                src={two}
                alt=""
                uk-cover="true"
              />
          
               <div
                class="uk-overlay  uk-position-center uk-text-center">
                  
                  <Typography class="head" >
                  BEST PLACE TO GROW YOUR CAREER
                </Typography>
                <Typography class="tag" >
                  Find Jobs,Employment & Career Opportunities
                </Typography>
                <Link to="/Register">
                  <Button variant="outlined"
                   
                    style={{
                      marginTop:"2em",
                      width:"20%",
                      height:"15%",
                      color: "white",
                      border:"1px solid white",
                      borderColor: "white",
                      background:"transparent",
                      
                    }}
                  >
                    REGISTER
                  </Button>
                </Link>
              </div>
            </li>


            <li>
              <img
                src={three}
                alt=""
                uk-cover="true"
              />
           
              <div
                class="uk-overlay  uk-position-center uk-text-center">
                  
                <Typography class="head">
                  LET'S START YOUR CAREER WITH US
                </Typography>
                <Typography class="tag">
                  We Leads You to Your Future
                </Typography>
                <Link to="/Register">
                  <Button variant="outlined"
                   
                    style={{
                      marginTop:"2em",
                      width:"20%",
                      height:"15%",
                      color: "white",
                      border:"1px solid white",
                      borderColor: "white",
                      background:"transparent",
                      
                    }}
                  >
                    REGISTER
                  </Button>
                </Link>
              </div>
            </li>
          </ul>


        </div>
      </div>
    );
  }
}

export default Slider;