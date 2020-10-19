import React, { useEffect } from "react";
import "./Portfolio.css";
import SubHeader from "../SubHeader/SubHeader";
import Carousel from "../Carousel/Carousel";

const Portfolio = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Portfolio-container">
      <SubHeader title="PORTFOLIO" />
      <Carousel />
    </div>
  );
};

export default Portfolio;
