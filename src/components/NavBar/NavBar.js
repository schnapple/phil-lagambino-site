import React from "react";
import NavBarItem from "./NavBarItem/NavBarItem";
import "./NavBar.css";

const NavBar = (props) => {
  const navBarLinks = [
    { title: "About" },
    { title: "Portfolio" },
    { title: "Contact" },
  ];

  const navBarMapped = navBarLinks.map((item, index) => {
    return (
      <NavBarItem
        key={index}
        title={item.title}
        aboutRef={props.aboutRef}
        portRef={props.portRef}
        conRef={props.conRef}
      />
    );
  });

  return (
    <div className="NavBar-container">
      <div className="NavBar-items-container">
        <div className="NavBar-item-phil">Phil LaGambino</div>
        {navBarMapped}
      </div>
      <div
        className="NavBar-item-resume"
        onClick={() =>
          window.open(
            "https://firebasestorage.googleapis.com/v0/b/phillagambino.appspot.com/o/PhilResume_Q22020.pdf?alt=media&token=99a9738e-9363-46b3-b6e6-6746bcab22c9",
            "_blank"
          )
        }
      >
        Resume
      </div>
    </div>
  );
};

export default NavBar;
