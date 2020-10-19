import React, { useEffect, useRef } from "react";
import "./Home.css";
import Summary from "../../components/Summary/Summary";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import Opening from "../../components/Opening/Opening";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const Home = (props) => {
  const aboutRef = useRef(null);
  const portRef = useRef(null);
  const conRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home-container">
      <NavBar aboutRef={aboutRef} portRef={portRef} conRef={conRef} />
      <Opening refVal={aboutRef} />
      <div ref={aboutRef} className="Opening-div" />
      <Summary />
      <div ref={portRef} className="Summary-div" />
      <Portfolio />
      <div ref={conRef} className="Contact-div">
        <div className="Contact-div-one" />
        <div className="Contact-div-two" />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
