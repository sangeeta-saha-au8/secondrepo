import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../redux/actions/projActions";
import Post from "../components/Post";

class Page2 extends Component {
  componentDidMount() {
    console.log("1", this.props);
    console.log("2", this.props.match.params.query);
    this.props.fetchPost(this.props.match.params.query);
  }

  componentDidUpdate(prevProps) {
    const prevSearchQuery = prevProps.match.params.query;
    const newSearchQuery = this.props.match.params.query;
    if (prevSearchQuery === newSearchQuery) {
      console.log("Do not update");
    } else {
      this.props.fetchPost(newSearchQuery);
    }
  }

  render() {
    return (
      <div>
        <h1> Page2 </h1>
        <div>Posts will be displayed here </div>
        <div> {this.props.history.location.pathname} </div>
        <div>
          {this.props.post === null ? (
            <h1>Loading</h1>
          ) : (
            <div>
              <ul>
                {this.props.post.map((post) => (
                  <Post key={post.id} currentPost={post} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    post: storeState.post,
  };
};

export default connect(mapStateToProps, { fetchPost })(Page2);
