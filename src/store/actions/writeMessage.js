import firebase from "firebase";

export const writeMessage = (name, email, message) => {
  return async (dispatch) => {
    try {
      firebase
        .database()
        .ref("messages/" + String(new Date().getTime()))
        .set({
          name: name,
          email: email,
          profile_picture: message,
        });
      console.log("Message Sent");
    } catch (err) {
      console.log(err);
    }
  };
};
