import { GET_COMMENTS, GET_CURRENT_POST, GET_ALL_POSTS, GET_ISSUES, REGISTER_USER, LOGIN_USER } from "../actionTypes";
import axios from "axios";

export const userRegister = (user) => {
  return {
    type: REGISTER_USER,
    payload: user,
  };
};

export const userLogin = (user) => {
  console.log("reached login user", user);
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const fetchAllPosts = () => async (dispatch) => {
  try {
    const { data } = await axios(`https://jsonplaceholder.typicode.com/posts`);
    //console.log("Post", data);
    let posts10 = data.filter(function (post) {
      return post.id <= 10;
    });
    dispatch({ type: GET_ALL_POSTS, payload: posts10 });
  } catch (err) {
    console.error(err);
  }
};

export const fetchPost = (postId) => async (dispatch) => {
  try {
    const { data } = await axios(`https://jsonplaceholder.typicode.com/posts?id=${postId}`);
    console.log("Post", data);
    dispatch({ type: GET_CURRENT_POST, payload: data });
  } catch (err) {
    console.error(err);
  }
};

export const fetchComments = (postId) => async (dispatch) => {
  try {
    const { data } = await axios(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    console.log("Comments", data);
    dispatch({ type: GET_COMMENTS, payload: data });
  } catch (err) {
    console.error(err);
  }
};

export const fetchIssues = () => async (dispatch) => {
  try {
    const { data } = await axios(`https://api.github.com/repos/sangeeta-saha-au8/secondrepo/issues`);
    console.log("Issue", data);
    dispatch({ type: GET_ISSUES, payload: data });
  } catch (err) {
    console.error(err);
  }
};
