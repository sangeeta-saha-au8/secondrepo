import { GET_COMMENTS, GET_CURRENT_POST, GET_ALL_POSTS, GET_ISSUES, REGISTER_USER, LOGIN_USER } from "../redux/actionTypes";

const initialState = {
  users: [],
  currentUser: null,
  posts: null,
  post: null,
  comments: null,
  issues: null,
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_USER:
      return { ...state, users: [...state.users, payload] };
    case LOGIN_USER: {
      console.log(state);
      let id = state.users.findIndex((user) => {
        console.log(user.email);
        console.log(payload.email);

        return user.email === payload.email;
      });

      if (id !== -1) {
        console.log("found user");
        return { ...state, currentUser: payload };
      }
    }

    case GET_ALL_POSTS:
      //console.log("1", payload, state);
      // let posts10 = payload.filter(function (post) {
      //   return post.id <= 10;
      // });
      // return { ...state, posts: posts10 };
      return { ...state, posts: payload };
    case GET_CURRENT_POST:
      console.log("1", payload, state);
      return { ...state, post: payload };
    default:
      return state;
  }
};

//console.log("I", initialState);

export default rootReducer;
