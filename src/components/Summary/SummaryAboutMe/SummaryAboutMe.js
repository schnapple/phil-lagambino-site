import React, { useEffect } from "react";
import "./SummaryAboutMe.css";

const SummaryAboutMe = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="Summary-about-me"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="Summary-about-me-header">Hi I'm Philip LaGambino.</div>

      <div className="Summary-about-me-break"></div>
      <div className="Summary-about-me-image-contatiner">
        <img
          className="Summary-about-me-image"
          alt="none"
          src="https://firebasestorage.googleapis.com/v0/b/phillagambino.appspot.com/o/signal-2019-04-11-132912.jpg?alt=media&token=5b92c7e5-ed74-440b-8108-6fa6d70742e5"
        />
      </div>
    </div>
  );
};

export default SummaryAboutMe;
