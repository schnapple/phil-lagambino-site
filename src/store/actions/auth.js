import * as actionTypes from "./actionTypes";
import firebase from "firebase";

export const authenticate = (token, expiryTime) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.AUTHENTICATE, token: token });
  };
};

export const login = () => {
  return async (dispatch) => {
    try {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(function () {
          return firebase
            .auth()
            .signInAnonymously()
            .catch(function (error) {
              // Handle Errors here.
              console.log(error.code + " " + error.message);
              // ...
            });
        })
        .catch(function (err) {
          console.log(err);
        });

      const curUser = firebase.auth().currentUser;
      const token = await curUser.getIdToken();
      dispatch(authenticate(token, parseInt(3600000)));
    } catch (err) {
      console.log(err);
    }
  };
};
