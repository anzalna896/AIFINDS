import React,{useEffect,createContext,useReducer,useContext}  from "react";
import { BrowserRouter as Router, Switch, Route,useHistory } from "react-router-dom";

//All Pages
import Payment from "./Payment Info/Payment_info"
import Home from "./Home/landing_page"
import Features from "./Features/Features"
import Careers from "./Careers/Careers"
import About from "./About Us/About_us"
import Blog from "./Blog/Blog"

//Authentication Pages
import Login from "../Auth/Login/Login"
import Register from "../Auth/Register/Register"
import FP from "../Auth/Login/Forgot"
import Reset from "../Auth/Login/Reset";

//Account Section
import ViewProfile from "../Account/ViewProfile"
import Profile from "../Account/Profile/Profile"
import Settings from "../Account/Settings"

//Settings Sub Pages
import Name from "../Account/pages/Name"
import Email from "../Account/pages/Email"
import Password from "../Account/pages/Password"
import Phone from "../Account/pages/Phone"
import Verification from "../Account/pages/2_step_verification"


//Fixed Header & Footer Components for All pages
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import {reducer,initialState} from '../Reducers/userReducer'

export const UserContext=createContext()

const Routing = ()=>{
 const history = useHistory()
 //const [state,dispatch] = useContext(UserContext)
 //useEffect(()=>{
 //  const user = JSON.parse(localStorage.getItem("user"))
   
   /*if(user){
     dispatch({type:"USER",payload:user})
     history.push('/')
   }else{
    history.push('/login')
   }
 })*/
  return(
    <Switch>
            {/* All Routes */}
            <Route exact path="/" component={Home} />
            <Route path="/Payment_info" component={Payment} />
            <Route path="/features" component={Features} />
            <Route path="/Careers" component={Careers} />
            <Route path="/About" component={About} />
            <Route path="/Blog" component={Blog} />

            {/* Authentication Pages */}
            <Route path="/login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/forgot_password" component={Reset} />
            <Route path="/reset_password" component={FP} />

            {/* Account Routes */}
            <Route path="/viewprofile" component={ViewProfile}/>
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />

            {/* Settings Sub Routes */}
            <Route path="/name" component={Name} />
            <Route path="/email" component={Email} />
            <Route path="/password" component={Password} />
            <Route path="/phone" component={Phone} />
            <Route path="/verification" component={Verification} />
          </Switch>
  )
}


class Routes extends React.Component {
  render() {

    return (
      <UserContext.Provider >
      <Router>
        <div>
          <div>
            <Header />
          </div>
          <Routing/>
          <div>
            <Footer />
          </div>
        </div>
      </Router>
      </UserContext.Provider>
    );
  }
}

export default Routes;
