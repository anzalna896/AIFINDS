import type from "../Types/types";

const { RESET_POST } = type;

export default function resetPostSuccess(state = [], action) {
  switch (action.type) {
    case RESET_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}
