import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search extends Component {
  state = {
    searchQuery: "",
  };

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hi there", this.state.searchQuery);
    this.props.history.push(`/search/${this.state.searchQuery}`);
  };

  render() {
    return (
      <form className="SearchForm" onSubmit={this.handleSubmit} style={{ margin: "10px auto" }}>
        <input
          type="text"
          name="searchQuery"
          style={{ width: "400px", height: "17px", color: "grey" }}
          onChange={this.handleChange}
          placeholder="Enter a number from 1 to 10"
          value={this.state.searchQuery}
        />

        <input type="Submit" value="Search" />
      </form>
    );
  }
}

export default withRouter(Search);
