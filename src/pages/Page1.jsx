import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "../redux/actions/projActions";
import Post from "../components/Post";
import Search from "../components/Search";

class Page1 extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    return (
      <div>
        <h1> Page1 </h1>
        <div>Posts will be displayed  </div>
        <Search />
        <div>
          {this.props.posts === null ? (
            <h1>Loading</h1>
          ) : (
            <div>
              <ul>
                {this.props.posts.map((post) => (
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
    posts: storeState.posts,
  };
};

export default connect(mapStateToProps, { fetchAllPosts })(Page1);
