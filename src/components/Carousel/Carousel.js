import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Carousel.css";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import CarouselItem from "./CarouselItem/CarouselItem";
import "pure-react-carousel/dist/react-carousel.es.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const carouselItems = useSelector((state) => state.fetchData.portfolio);
  const carouselItemsMapped = carouselItems.map((carouselItem, index) => {
    return (
      <CarouselItem key={index} index={index} carouselItem={carouselItem} />
    );
  });

  return (
    <div
      className="Carousel-container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <CarouselProvider
        className="Carousel"
        visibleSlides={3}
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={carouselItems.length}
      >
        <div className="Carousel-div">
          <Slider>{carouselItemsMapped}</Slider>
          <ButtonBack className="Carousel-button-back">
            <IoIosArrowBack color="black" size={40} />
          </ButtonBack>
          <ButtonNext className="Carousel-button-next">
            <IoIosArrowForward color="black" size={40} />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Carousel;
