import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Update from './updation';


class Settings extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  

    this.state = {
      name: "",
      phone: "",
      address: ""
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
   
  }
  onSubmit(e) {
    e.preventDefault();
    const serverport = {
      name: this.state.name,
      phone: this.state.phone,
      address: this.state.address
    };
    axios
      .post("http://localhost:4000/user/profile", serverport)
      .then(res => console.log(res.data));
    alert("Your Profile Created Successfully");
    this.setState({
      name: '',
      phone: '',
      address: ''
    });
  }

  render() {
    return (
     <Update/>
    );
  }
}

export default Settings;
