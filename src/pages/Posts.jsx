import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "../redux/actions/projActions";
//import Post from "../components/Post";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    return (
      <div>
        <h1>Posts will be displayed here </h1>

        <div>
          {this.props.posts === null ? (
            <h1>Loading</h1>
          ) : (
            <div>
              <ul>
                {this.props.posts.map((post) => (
                  <li>
                    key={post.id} {post.id} {post.title} {post.body}
                  </li>
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
    posts: storeState.posts,
  };
};

export default connect(mapStateToProps, { fetchAllPosts })(Posts);
