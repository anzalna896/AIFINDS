import type from "../Types/types";


const { FETCH_POSTS } = type;


const initialState = {

  users: {}

};



export default function fetchPost(state = initialState, action) {

  switch (action.type) {

    case FETCH_POSTS:

      return {

        ...state,

        users: action.payload

      };



    default:

      return state;

  }
}
