import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <div>
        <h1> MainPage. </h1>
        <p>
          <Link to={`/calc`}> Click on this link to open Calculator </Link>
        </p>
        <p>
          <Link to={`/page1`}> Click on this link to open data of Posts </Link>
        </p>
      </div>
    );
  }
}

export default MainPage;
