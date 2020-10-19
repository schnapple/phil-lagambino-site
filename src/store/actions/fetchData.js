import * as actionTypes from "./actionTypes";
import firebase from "firebase";

export const fetchAllData = () => {
  return async (dispatch) => {
    try {
      var dataRef = firebase
        .database()
        .ref("1lNousl64QEMYvYC6VUZiFnjfnR7R9OZrtVCzzzeUxnc/");
      dataRef.on("value", function (snap) {
        const summary = [];
        const portfolio = [];

        for (const key in snap.val()) {
          if (key === "summary-items") {
            for (const value in snap.val()[key]) {
              summary.push(snap.val()[key][value]);
            }
          } else if (key === "portfolio-items") {
            for (const value in snap.val()[key]) {
              portfolio.push(snap.val()[key][value]);
            }
          }
        }

        dispatch({
          type: actionTypes.FETCH_DATA,
          summary: summary,
          portfolio: portfolio,
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
};
