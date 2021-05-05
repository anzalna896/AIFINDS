import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../Auth/Login/Login.css";

//Redux Imports
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";

class Email extends Component {
  state = {
    email: ""
  };

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    alert("You have Resetted Successfully");
    const user = this.state;
    this.props.history.push("/login");
    this.props.resetPost(user);
  }

  render() {
    return (
      <div className="" style={{ height: "100vh" }}>
        <div className="uk-position-center">
          <div
            class="uk-card uk-card-default uk-card-body"
            style={{ boxShadow: "5px 5px 10px", borderRadius: 5 }}
          >
            <div class="uk-margin">
              <input
                class="uk-input"
                type="text"
                placeholder="Email "
                onChange={this.onChangeEmail.bind(this)}
              />
            </div>
            <button
              class="uk-button uk-button-primary fresh-login"
              onClick={this.onSubmit.bind(this)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  resetPost: user => dispatch(actions.resetPost(user))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Email)
);





















// import React from "react";
// import { Link } from "react-router-dom";
// import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/styles";
// import TextField from "@material-ui/core/TextField";
// import { blue } from "@material-ui/core/colors";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexWrap: "wrap"
//   },
//   margin: {
//     margin: theme.spacing(1)
//   },
//   button: {
//     margin: theme.spacing(1)
//   }
// }));

// const theme = createMuiTheme({
//   palette: {
//     primary: blue
//   }
// });

// export default function Email() {
//   const classes = useStyles();

//   return (
//     <div
//       class="uk-text-left"
//       style={{
       
//         height: "35vh",
//         margin: "70px",
//         width: 900,
//         marginLeft: 250
//       }}
//     >
//       <div style={{ margin: 30, marginTop: 10 }}>
//         <form className={classes.root} noValidate>
//           <ThemeProvider theme={theme}>
//             <TextField
//               className={classes.margin}
//               label="New email address"
//               variant="outlined"
//               id="mui-theme-provider-outlined-input"
//               style={{ width: 290 }}
//             />

//             <div>
//               <TextField
//                 className={classes.margin}
//                 label="Current password"
//                 variant="outlined"
//                 id="mui-theme-provider-outlined-input"
//                 style={{ width: 290 }}
//               />
//             </div>

//             <Button
//               variant="outlined"
//               color="primary"
//               className={classes.button}
//             >
//               Save email
//             </Button>

//             <Button
//               variant="outlined"
//               color="primary"
//               className={classes.button}
//             >
//               <Link to="/settings">Cancel changes</Link>
//             </Button>
//           </ThemeProvider>
//         </form>
//       </div>
//     </div>
//   );
// }
