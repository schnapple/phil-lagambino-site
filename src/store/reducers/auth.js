import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
      };
    default:
      return state;
  }
};
