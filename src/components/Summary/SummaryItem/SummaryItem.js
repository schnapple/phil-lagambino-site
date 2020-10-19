import React, { useEffect } from "react";
import "./SummaryItem.css";
import { IoIosSpeedometer } from "react-icons/io";
import { GrLineChart, GrObjectGroup, GrOptimize } from "react-icons/gr";

const SummaryItem = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let icon = null;
  switch (props.summary.icon) {
    case "IoIosSpeedometer":
      icon = <IoIosSpeedometer size="6vh" />;
      break;
    case "GrLineChart":
      icon = <GrLineChart size="6vh" color="#27738D" />;
      break;
    case "GrObjectGroup":
      icon = <GrObjectGroup size="6vh" color="#27738D" />;
      break;
    case "GrOptimize":
      icon = <GrOptimize size="6vh" color="#27738D" />;
      break;
    default:
      return null;
  }

  return (
    <div className="Summary-items-container">
      <div
        data-aos="flip-down"
        data-aos-delay={props.summary.delay}
        data-aos-duration="1000"
      >
        {icon}
      </div>
      <div
        data-aos="fade-in"
        data-aos-delay={props.summary.delay}
        data-aos-duration="500"
      >
        <div className="Summary-item-header">{props.summary.title}</div>
        <div className="Summary-item-summary">{props.summary.summary}</div>
      </div>
    </div>
  );
};

export default SummaryItem;
