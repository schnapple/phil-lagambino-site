import React, { useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Summary from "../../components/Summary/Summary";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import Opening from "../../components/Opening/Opening";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  openingDiv: {
    height: "3vw",
  },
  summaryDiv: {
    height: "5vw",
    backgroundImage: "-webkit-linear-gradient(88deg,rgba(223, 219, 219, 0.199) 50%,white 50%)"
  },
  contactDiv: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  contactOne: {
    width: '40%',
    height: '5vw',
    backgroundImage: `-webkit-linear-gradient(96deg, ${theme.palette.primary.main} 48%, rgba(223, 219, 219, 0.199) 50%)`,
  },
  contactTwo: {
    width: "60%",
    backgroundImage: `-webkit-linear-gradient(86deg, ${theme.palette.primary.main} 48%, rgba(223, 219, 219, 0.199) 50%)`,
    height: '5vw',
  },
}));

const Home = (props) => {
  const classes = useStyles()
  const aboutRef = useRef(null);
  const portRef = useRef(null);
  const conRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.root}>
      <NavBar aboutRef={aboutRef} portRef={portRef} conRef={conRef} />
      <Opening refVal={aboutRef} />
      <div ref={aboutRef} className={classes.openingDiv} />
      <Summary />
      <div ref={portRef} className={classes.summaryDiv} />
      <Portfolio />
      <div ref={conRef} className={classes.contactDiv}>
        <div className={classes.contactOne} />
        <div className={classes.contactTwo} />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
