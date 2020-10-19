import React, { useEffect } from "react";
import "./SubHeader.css";

const SubHeader = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="Sub-header-container"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <div
        className="Sub-header-title"
        style={{ color: props.color, borderBottomColor: props.color }}
      >
        {props.title}
      </div>
    </div>
  );
};

export default SubHeader;
