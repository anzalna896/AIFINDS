import type from "../Types/types";
import axios from "axios";
// import setAuthorizationToken from "./loginAction"
import jwt from "jsonwebtoken";

const apiUrl = "http://localhost:4000/user/login";
const { FETCH_POSTS } = type;

export const fetchPosts = posts => {
  return {
    type: FETCH_POSTS,
    payload: posts
  };
};

export const fetchAllPosts = (user) => {
  return dispatch => {
    return axios
      .post(apiUrl, user)
      .then(response => {
        let result = response.data;
        // console.log(result);
        let token = response.data.token;
        // console.log(token)
        // setAuthorizationToken(token); 
        // console.log(jwt.decode(token))
        const new_res = jwt.decode(token);
        localStorage.setItem("jwt Token", JSON.stringify(token));
        // console.log(new_res);
        const details = JSON.parse(localStorage.getItem("jwt Token"));
        console.log(details)
        dispatch(fetchPosts(new_res));
        
      })
      .catch(error => {
        throw error;
      });
  };
};
export const logoutUser = () => ({
  type: "LOGOUT_USER"
});

