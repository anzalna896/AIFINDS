import type from "../Types/types";
import axios from "axios";

const api = "http://localhost:4000/user/update/:5db3d91f37414423a836100a";
const { RESET_POST } = type;

export const resetPost = user => {
  return dispatch => {
    return axios
      .post(api, user)
      .then(response => {
        dispatch(resetPostSuccess(response.data));
        console.log(response.data);
        console.log(user);
      })
      .catch(error => {
        throw error;
      });
  };
};

export const resetPostSuccess = data => {
  return {
    type: RESET_POST,
    payload: data
  };
};
