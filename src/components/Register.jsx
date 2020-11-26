import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { userRegister } from "../redux/actions/projActions";
import "../styles/Login.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //const { name, email, password } = this.state;
    console.log("Register", this.state);
    this.props.userRegister(this.state);
    this.props.history.push("/");
    //alert("Customer has successfully registered");
  };

  render() {
    return (
      <div>
        <h1> Register </h1>

        <form className="Login" onSubmit={this.handleSubmit}>
          Name:
          <input onChange={this.handleChange} value={this.state.name} type="text" name="name" placeholder="Full Name" />
          Email:
          <input
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            name="email"
            placeholder="somename123@something.com"
          />
          Password:
          <input
            onChange={this.handleChange}
            value={this.state.password}
            type="password"
            name="password"
            placeholder="********"
          />
          <input type="submit" style={{ width: "100px", height: "30px", color: "blue" }} value="Register" />
          <p>
            Already have an account?
            <Link to="/"> Login</Link>
          </p>
        </form>
      </div>
    );
  }
}

//export default Register;

export default connect(null, { userRegister })(Register);
