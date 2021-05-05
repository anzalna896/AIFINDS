import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";

import logo from "./image/logo.jpg";

class Header extends React.Component {
  handleClick = event => {
    event.preventDefault();
    // Remove the token from localStorage
    localStorage.removeItem("jwt Token");
    // Remove the user object from the Redux store
    
    this.props.logoutUser();
    this.props.history.push("/");
  };
  render() {
    return (
      <nav
        class="uk-navbar-container uk-margin "
        uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar"
        uk-navbar="mode: click"
      >
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li class="uk-active">
              <Link to="/">
                <img
                  src={logo}
                  style={{ height: "50%", width: "50%",borderRadius:"50%" }}
                  alt="logo"
                />
              </Link>
            </li>
          </ul>
        </div>

        <div class="uk-navbar-right ">
          <ul class="uk-navbar-nav hover uk-visible@m">
            <li class="uk-active">
              <Link to="/">HOME</Link>
            </li>
            <li class="uk-active">
              <Link to="/About">ABOUT</Link>
            </li>
            
            <li class="uk-active">
              <Link to="/features">FEATURES</Link>
            </li>
            <li class="uk-active">
              <Link to="/Careers">CAREERS</Link>
            </li>
            <li class="uk-active">
              <Link to="/Blog">BLOG</Link>
            </li>
           <li class="uk-active">
              <Link to="/Payment_info">PAYMENT</Link>
            </li>
            <li class="uk-active">
              <Link to="/Register">REGISTER</Link>
            </li>

            <li class="uk-active">
              <a href=" ">ACCOUNT</a>
            </li>
            <div uk-dropdown="mode: click">
              <ul className="uk-list">
                <li>
                  <Link to="/viewprofile">VIEW PROFILE</Link>
                </li>
                <li>
                  <Link to="/profile">PROFILE</Link>
                </li>
                <li>
                  <Link to="/settings">SETTINGS</Link>
                </li>
                <li>
                  <Link onClick={this.handleClick}>LOGOUT</Link>
                </li>
              </ul>
            </div>
          </ul>
            <div className="mobile_navigation">
            <div className="uk-hidden@m uk-sticky uk-sticky-fixed" uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <a uk-navbar-toggle-icon="true" href="#offcanvas" className="uk-margin-large-right tg" uk-toggle="target: #offcanvas">
            <svg style={{color:"white"}} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="navbar-toggle-icon">
                <rect y="9" width="20" height="2"></rect>
                <rect y="3" width="20" height="2"></rect>
                <rect y="15" width="20" height="2"></rect></svg>
            </a>

<div id="offcanvas" uk-offcanvas="flip:true; overlay: true">
    <div className="uk-offcanvas-bar uk-flex uk-flex-column" style={{backgroundColor:"#304B83",color:"#fff",width:"10rem",height:"18rem"}}>
        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
        <ul className="uk-nav  uk-nav-center uk-margin-auto-vertical" style={{fontSize:"1em"}}>
            <li>
            
                <Link to="/">HOME</Link>
                </li>
            <li>
                <Link to="/About">ABOUT</Link>
                </li>
            <li>
                <Link to="/features">FEATURES</Link>
                </li>
            <li>
                <Link to="/Careers">CAREERS</Link>
                </li> 
            <li>
                <Link to="/Blog">BLOG</Link>
                </li>   
            <li>
                <Link to="/Payment_info">PAYMENT</Link>
                </li>          
            <li>
                <Link onClick={this.handleClick}>LOGOUT</Link>
                </li>
        </ul>

       </div>
      </div> 
     </div>           
   </div>
  </div>

    </nav>
    );
  }
}

// export default Header;

const mapDispatchToProps = dispatch => ({
  logoutUser: user => dispatch(actions.logoutUser())
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Header)
);