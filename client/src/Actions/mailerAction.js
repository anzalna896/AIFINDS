import type from "../Types/types";
import axios from "axios";

const api = "http://localhost:4000/user/send-email";
const { MAIL_POST } = type;

export const mailPost = user => {
  return dispatch => {
    return axios
      .post(api, user)
      .then(response => {
        dispatch(mailPostSuccess(response.data));
        console.log(response.data);
        console.log(user);
      })
      .catch(error => {
        throw error;
      });
  };
};

export const mailPostSuccess = data => {
  return {
    type: MAIL_POST,
    payload: data
  };
};
