import React, {useState} from "react";
import "./Register.css";
import { withRouter,Link,useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";

const Register = () =>{
  const history = useHistory()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const Submit = ()=>{
   if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
     alert("Invalid email") 
     return 
    }
    fetch("http://localhost:5000/register",{
    method:"post",
    headers:{
      "Content-Type" : "application/json"
   },
   body:JSON.stringify({
     name,
     email,
     password
   })
   }).then(res=>res.json())
   .then(data=>{
     if(data.error){
       alert(data.error)
     }
     else{
       alert(data.message)
       history.push('/login')
     }
   }).catch(err=>{
     console.log(err)
   })
  
  }

  function toggleShow(e) {
      e.setState({ hidden: !e.state.hidden });
     }
     
    return (
      <div className="main" style={{  height: "100vh" }}>
        <div className="uk-position-center uk-text-center">
          <div
            class="uk-card uk-card-body"
            style={{borderRadius: 5 }}
          >
           <h5
              class="uk-heading-line uk-text-center"
              style={{ marginTop: 20,color:"white"}}
            >
              <span>REGISTER NOW</span>
            </h5>      

            <div class="uk-margin uk-text-center">
               <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
              <input
                class="uk-input"
                type="text"
               // style={{border:(this.state.error)?"1px solid red":''}}
                placeholder="Name "
                onChange={(e)=>setName(e.target.value)}
                value={name}
              /></div>
            </div>

            <div class="uk-margin uk-text-center">
               <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: mail"></span>
              <input
                class="uk-input"
                id="email"
                type="text"
                //onBlur={this.validateEmail.bind(this)}
                //style={{border:(this.state.error)?"1px solid red":''}}
                placeholder="Email "
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              /></div>
            </div>

            <div class="uk-margin uk-text-center ">
                <div class="uk-inline ">
                  <span class="uk-form-icon" uk-icon="icon:lock"/>
                 <input
                class="uk-input "
            //    style={{width:315}}
                id="password-field"
                type="password"
               // type={this.state.hidden ? "password" : "text"}
                //style={{border:(this.state.error)?"1px solid red":''}}
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
               />
             {/* <i class="fa fa-eye  uk-text-right" id="password-status" aria-hidden="true" onClick={()=>toggleShow()} />
              {this.state.type === "password" ? "Hide" : ""}*/}
              </div>  
            </div>


            <div style={{ marginTop: -10 }}>
              <span
                id="not_valid"
                style={{
                  fontFamily: "italic",
                  fontSize: 10,
                  color: "red"
                }}
              />
            </div>


            <button
              class="uk-button login uk-text-center"
              onClick={()=>Submit()}
            >
              Register
            </button>
 
 
             <h5
              class="uk-heading-line uk-text-center"
              style={{ marginTop: 25,color:"white"}}
            >
              <span>OR USING EMAIL</span>
            </h5>
          
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
            
            <hr />
             <p class="uk-text-center" style={{paddingTop:"1em",color:"white"}}>
              Already have an account ? <Link to="/login" style={{color:"black"}}>Sign in</Link> now !
            </p>
          </div>
        </div>
      </div>
    );
  }


const mapDispatchToProps = dispatch => ({
  createPost: user => dispatch(actions.createPost(user))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Register)
);
