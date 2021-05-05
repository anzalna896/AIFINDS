import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../Auth/Login/Login.css";

//Redux Imports
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";

class Name extends Component {
  state = {
    name: ""
  };

  onChangeName(e) {
    this.setState({
      name: e.target.value
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
                placeholder="Name "
                onChange={this.onChangeName.bind(this)}
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
  )(Name)
);
















