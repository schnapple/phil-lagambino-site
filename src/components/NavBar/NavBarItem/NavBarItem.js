import React from "react";
import "./NavBarItem.css";

const NavBarItem = (props) => {
  const navClickHandler = () => {
    window.scrollTo({
      top: refVal.current.offsetTop,
      behavior: "smooth",
    });
  };

  let refVal = null;
  switch (props.title) {
    case "About":
      refVal = props.aboutRef;
      break;
    case "Portfolio":
      refVal = props.portRef;
      break;
    case "Contact":
      refVal = props.conRef;
      break;
    default:
      return null;
  }

  return (
    <div className="NavBarItem" onClick={navClickHandler}>
      {props.title}
    </div>
  );
};

export default NavBarItem;
