import type from "../Types/types";

const { ADD_POST } = type;

export default function createPostSuccess(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}
