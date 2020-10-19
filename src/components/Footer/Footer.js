import React from "react";
import "./Footer.css";
import FooterItem from "./FooterItem/FooterItem";

const Footer = (props) => {
  const footerLinks = [
    {
      title: "FaLinkedin",
      link: "https://www.linkedin.com/in/phil-lagambino/",
    },
    { title: "FaGithub", link: "https://github.com/schnapple" },
  ];

  const footerLinksMapped = footerLinks.map((item, index) => {
    return <FooterItem key={index} item={item} />;
  });

  return (
    <div className="Footer-container">
      <div className="Footer-copyright">© 2020 Phil LaGambino.</div>
      <div className="Footer-items-container">{footerLinksMapped}</div>
    </div>
  );
};

export default Footer;
