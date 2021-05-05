import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";


class FP extends Component {
  state = {
    email: "",
  };

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    alert("You have Send Successfully");
    const user = this.state.email;
    this.props.history.push("/login");
    this.props.mailPost({to: user});
 
  }
  render() {
    return (
      <div className="main" style={{ backgroundColor: "#EBEBEB", height: "100vh" }}>
        <div className="uk-position-center uk-text-center">
          <div
            class="uk-card  uk-card-body"
            style={{borderRadius: 5 }}
          >
            <div
              class="uk-heading-line uk-text-center"
              style={{ marginTop: 25 }}
            >
              <span style={{color:"white"}}>Enter Registered Email</span>
            </div>
            <div class="uk-margin">
               <div class="uk-inline">
               <span class="uk-form-icon" uk-icon="icon: mail"></span>
                <input class="uk-input" 
                type="text" 
                placeholder="Email "
                onChange={this.onChangeEmail.bind(this)}
                value={this.state.email}
              />
              </div>
            </div>

            <button
              class="uk-button login"
              onClick={this.onSubmit.bind(this)}
            >
              Send
            </button>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  mailPost: user => dispatch(actions.mailPost(user))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(FP)
);
