import React, { Component } from "react";
import "../Register/Register.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";

class Reset extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    hidden: true
  };

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePass(e) {
    this.setState({
      password: e.target.value
    });
    if (e.target.value.length <= 6) {
      console.log("valid");
    } else {
      document.getElementById("not_valid").innerHTML =
        "password should be min 6 character";
      console.log("Not valid");
      alert("Password should be min 6 character");
    }
  }

  onSubmit(e) {
    e.preventDefault();
    alert("You have Resetted Successfully");
    const user = this.state;
    this.props.history.push("/login");
    this.props.resetPost(user);
  }

  toggleShow(e) {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    return (
      <div className="main" style={{ backgroundColor: "#EBEBEB", height: "100vh" }}>
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
                value={this.state.name}
              />
            </div>

            <div class="uk-margin">
              <input
                class="uk-input"
                type="text"
                placeholder="Email "
                onChange={this.onChangeEmail.bind(this)}
                value={this.state.email}
              />
            </div>
            <div class="uk-margin ">
              <input
                class="uk-input "
                type={this.state.hidden ? "password" : "text"}
                placeholder="Password"
                onChange={this.onChangePass.bind(this)}
                value={this.state.password}
                style={{ zIndex: 10, paddingRight: "40px" }}
              />

              <button
                class="uk-button uk-button-default "
                onClick={this.toggleShow.bind(this)}
                style={{
                  position: "absolute",
                  marginLeft: "-40px",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 100,
                  paddingLeft: "10px",
                  paddingRight: "10px"
                }}
              >
                <i class="fas fa-eye" />
                {this.state.type === "password" ? "Hide" : ""}
              </button>
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
              class="uk-button uk-button-primary fresh-login"
              onClick={this.onSubmit.bind(this)}
            >
              Reset
            </button>

            <hr />
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
  )(Reset)
);
