import React, { Component } from "react";
import { Redirect, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import Register from "../components/Register";
import Login from "../components/Login";

class HomePage extends Component {
  render() {
    return this.props.currentUser ? (
      <Redirect to="/main" />
    ) : (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    currentUser: storeState.currentUser,
  };
};

//export default HomePage;
export default connect(mapStateToProps)(HomePage);
