import React, { useEffect } from "react";
import "./Summary.css";
import { useSelector } from "react-redux";
import SubHeader from "../SubHeader/SubHeader";
import SummaryItem from "./SummaryItem/SummaryItem";
import SummaryAboutMe from "./SummaryAboutMe/SummaryAboutMe";

const Summary = (props) => {
  const summaryItems = useSelector((state) => state.fetchData.summary);

  const summaryMapped = summaryItems.map((summary, index) => {
    return <SummaryItem key={index} summary={summary} />;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Summary-container" id="Summary">
      <SubHeader title="ABOUT" />
      <div className="Summary-items-containers">{summaryMapped}</div>
      <div className="Summary-info-container">
        <SummaryAboutMe />
        <div
          className="Summary-paragraph"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          I am a Software Engineer with full-stack experience from
          (un)structured database construction to elegant front-end design with
          javascript, python and java frameworks. Motivated to dive into new
          domains, APIs and libraries while also contributing to an agile team.
        </div>
      </div>
    </div>
  );
};

export default Summary;
