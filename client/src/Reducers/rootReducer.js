import { combineReducers } from "redux";

//All Reducers
import fetchPost from "./fetchReducer";
import createPost from "./postReducer";
import resetPost from "./resetReducer";

export default combineReducers({
  fetchPost,
  createPost,
  resetPost
});
