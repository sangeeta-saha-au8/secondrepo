import React from "react";
import { Link } from "react-router-dom";

import "../styles/Post.css";

const Post = ({ currentPost }) => {
  let postComp = <h1>Please specifiy post !!!</h1>;
  if (currentPost !== undefined) {
    postComp = (
      <div className="post">
        <Link to={`/${currentPost.id}`}> PostDetail </Link>
        <p>Title: {currentPost.title}</p>
        <p>Body: {currentPost.body}</p>
        <p>User:{currentPost.userId}</p>
      </div>
    );
  }
  return postComp;
};

export default Post;
