import React, { useEffect } from "react";
import "./Opening.css";
import { IoMdArrowRoundForward } from "react-icons/io";

const Opening = (props) => {
  const openingClickHandler = () => {
    window.scrollTo({
      top: props.refVal.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Opening">
      <div></div>
      <div className="Opening-title">
        Software Solutions <br />
        with Modern Designs
      </div>
      <div className="Opening-button" onClick={openingClickHandler}>
        <div>View my work</div>
        <IoMdArrowRoundForward className="Opening-button-icon" color="white" />
      </div>
    </div>
  );
};

export default Opening;
