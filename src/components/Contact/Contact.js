import React, { useState } from "react";
import "./Contact.css";
import { useDispatch } from "react-redux";
import SubHeader from "../SubHeader/SubHeader";
import * as writeAction from "../../store/actions/writeMessage";

const Contact = (props) => {
  const dispatch = useDispatch();
  const [valid, setValid] = useState(true);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const buttonHandler = () => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      console.log("Message Sent");
      setValid(true);
      dispatch(writeAction.writeMessage(name, email, message));
    } else {
      console.log("ERROR: Bad Email");
      setValid(false);
    }
  };

  return (
    <div className="Contact-container">
      <SubHeader title="CONTACT" color="white" />
      <div className="Contact-phrase">Always interested in talking.</div>
      <div className="Contact-form-container">
        <div className="Contact-one-line-container">
          <input
            className="Contact-one-line-input"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="Contact-one-line-container">
          <input
            className="Contact-one-line-input"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="Contact-message">
          <textarea
            className="Contact-message-input"
            placeholder="Message"
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className="Contact-submit-container">
          <div className="Contact-submit" onClick={buttonHandler}>
            Submit
          </div>
          {valid ? null : (
            <div className="Contact-submit-error">Invalid Email Format</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
