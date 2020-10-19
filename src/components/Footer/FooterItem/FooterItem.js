import React from "react";
import "./FooterItem.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterItem = (props) => {
  let icon = null;
  switch (props.item.title) {
    case "FaGithub":
      icon = <FaGithub size="4vh" />;
      break;
    case "FaLinkedin":
      icon = <FaLinkedin size="4vh" />;
      break;
    default:
      return null;
  }

  return (
    <div
      className="Footer-item-container"
      onClick={() => window.open(props.item.link, "_blank")}
    >
      {icon}
    </div>
  );
};

export default FooterItem;
