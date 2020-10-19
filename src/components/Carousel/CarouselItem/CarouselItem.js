import React, { useEffect } from "react";
import "./CarouselItem.css";
import { Slide } from "pure-react-carousel";

const CarouselItem = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Slide index={props.index}>
      <div className="Slide-container">
        <div className="Slide-container-two">
          <img
            className="Slide-image"
            src={props.carouselItem.imageUrl}
            alt="new"
          />
        </div>
        <div className="Slide-title-container">
          <span className="Slide-title">{props.carouselItem.title}</span>
        </div>
        <a
          className="Slide-link-container"
          href={props.carouselItem.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <span className="Slide-link">Check it out</span>
        </a>
      </div>
    </Slide>
  );
};

export default CarouselItem;
