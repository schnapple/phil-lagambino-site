import React from "react";
import IconButton from '@material-ui/core/IconButton';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterItem = (props) => {
  let icon = null;
  switch (props.item.title) {
    case "FaGithub":
      icon = <FaGithub size="3vh" />;
      break;
    case "FaLinkedin":
      icon = <FaLinkedin size="3vh" />;
      break;
    default:
      return null;
  }

  return (
    <IconButton
      style={{ color: 'white' }}
      onClick={() => window.open(props.item.link, "_blank")}
    >
      {icon}
    </IconButton>
  );
};

export default FooterItem;
