import type from "../Types/types";

const { MAIL_POST } = type;

export default function mailPostSuccess(state = [], action) {
  switch (action.type) {
    case MAIL_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}
