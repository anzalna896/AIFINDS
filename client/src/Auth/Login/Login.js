import React, {useState} from "react";
import { Link,useHistory } from "react-router-dom";
//import axios from "axios";
import "./Login.css";
//import {UserContext} from '../../pages/route'
//Redux Imports
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";

const Login=()=>{
  const history = useHistory()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const Submit = ()=>{
   if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
     alert("Invalid email") 
     return 
    }
    fetch("http://localhost:5000/login",{
    method:"post",
    headers:{
      "Content-Type" : "application/json",
      "Authorization":"Bearer "+localStorage.getItem("jwt")
   },
   body:JSON.stringify({
     email,
     password
   })
   }).then(res=>res.json())
   .then(data=>{
     console.log(data)
     if(data.error){
       alert(data.error)
     }
     else{
       alert("Logged in Successfully")
       history.push('/profile')
     }
   }).catch(err=>{
     console.log(err)
   })
  
  }

 
    return (
      <div className="main" style={{  height: "100vh" }}>
        <div className="uk-position-center uk-text-center">
          <div
            class="uk-card uk-card-body">
           
          <span class="uk-position-top-center" 
          uk-icon="icon: user; ratio: 3"
          style={{color:"white",paddingTop:'2em'}} 
          ></span> 

        <div
         class="uk-text-center"
         style={{ marginTop:'4em'}}
        >
              <span style={{color:"white"}}>LOG IN TO YOUR ACCOUNT</span>
            </div>


          <div class="uk-margin uk-text-center" style={{paddingTop:"1.5em"}}>
           <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: mail"></span>
              <input class="uk-input" 
                type="text" 
                placeholder="Email "
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          <div class="uk-margin uk-text-center">
           <div class="uk-inline">
              <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                <input class="uk-input" 
                type="password"
                 placeholder="Password"
                 onChange={(e)=>setPassword(e.target.value)}
                 value={password}
              />
            </div>
          </div>


          <div class="uk-text-left">
          <input class="uk-checkbox" type="checkbox">
          </input>
          <span  style={{paddingLeft:"1em",color:"white",fontSize:"0.9em",fontWeight: 400 }}>Keep me logged in</span>
            </div>


            <Link to="/reset_password">
              {" "}
              <p class="link uk-text-right" style={{ paddingTop:"1em" }} >
                Forgot Password ?
              </p>
            </Link>


            <button
              class="uk-button uk-text-center login "
              onClick={()=>Submit()}
            >
              Login
            </button>

             <div
              class="uk-heading-line uk-text-center"
              style={{ marginTop: 25 }}
            >
              <span style={{color:"white"}}>OR LOGIN WITH</span>
            </div>

          <div class="uk-inline">
          <div class="uk-text-center" style={{paddingTop:"1em"}}>     
           <span class="g-signin2" data-width="180" data-height="28" data-longtitle="true" data-theme="dark" data-onsuccess="onSignIn" />
          </div> 
          <div class="uk-text-center"style={{paddingTop:"1em"}}>
            <span class="fb-login-button " 
            data-size="medium"
            data-button-type="login_with" 
            data-auto-logout-link="false"
            data-use-continue-as="false" />
            </div>
       </div>
         
          <p class="uk-text-center" style={{paddingTop:"1em",color:"white"}}>
              Not a member ? <Link to="/Register" style={{color:"black"}}>Sign Up</Link> now !
            </p>
          </div>
        </div>
      </div>
    );
  }



const mapDispatchToProps = dispatch => ({
  fetchAllPosts: (user) => dispatch(actions.fetchAllPosts(user))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Login)
);