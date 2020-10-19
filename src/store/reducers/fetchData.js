import * as actionTypes from "../actions/actionTypes";

const initialState = {
  portfolio: [],
  summary: [],
};

const fetchData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        summary: action.summary,
        portfolio: action.portfolio,
      };
    default:
      return state;
  }
};

export default fetchData;
