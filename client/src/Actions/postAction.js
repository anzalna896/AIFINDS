import type from "../Types/types";
import axios from "axios";

const api = "http://localhost:4000/user/signup";
const { ADD_POST } = type;

export const createPost = user => {
  return dispatch => {
    return axios
      .post(api, user)
      .then(response => {
        dispatch(createPostSuccess(response.data));
        console.log(response.data);
      })
      .catch(error => {
        throw alert("Already Registered This Mail ");
      });
  };
};

export const createPostSuccess = data => {
  return {
    type: ADD_POST,
    payload: data
  };
};
