import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, fetchComments } from "../redux/actions/projActions";
import Comment from "./Comments";

class PostDetail extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
    this.props.fetchComments(this.props.match.params.postId);
  }

  render() {
    console.log("Rendering from PostDetail (this.props.post)", this.props.post);
    // let newVar = this.props.post[0].title;
    // console.log("N", newVar);
    return (
      <div>
        {this.props.post === null ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <p> Post Id: {this.props.post[0].id} </p>
            <p> Post Title: {this.props.post[0].title} </p>
            <p> Post Body: {this.props.post[0].body} </p>
          </div>
        )}

        {this.props.comments ? (
          <>
            {this.props.comments.map((comment) => (
              <Comment key={comment.id} currentComment={comment} />
            ))}{" "}
          </>
        ) : (
          <h1> Loading Comments </h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    post: storeState.post,
    comments: storeState.comments,
  };
};

export default connect(mapStateToProps, { fetchPost, fetchComments })(PostDetail);
