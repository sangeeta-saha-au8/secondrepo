import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { userLogin } from "../redux/actions/projActions";
import "../styles/Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // const { email, password } = this.state;
    console.log("Login", this.state);
    this.props.userLogin(this.state);
    this.props.history.push("/register");
  };

  render() {
    return (
      <div>
        <h1> Login </h1>

        <form className="Login" onSubmit={this.handleSubmit}>
          <h3> Register First if you are a New user </h3>
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
          <input type="submit" style={{ width: "100px", height: "30px", color: "blue" }} value="Login" />
          <p>
            Are you a new User?
            <Link to="/register"> Register </Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    currentUser: storeState.currentUser,
  };
};

export default connect(mapStateToProps, { userLogin })(Login);
