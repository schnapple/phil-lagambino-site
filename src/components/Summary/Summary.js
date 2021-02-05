import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SummaryItem from "./SummaryItem/SummaryItem";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  summaryBig: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '10px',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  subheader: {
    color: theme.palette.primary.main,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.primary.main,
    marginTop: '20px'
  },
  image: {
    width: '20vw',
    height: '20vw',
    objectFit: 'cover',
    overflow: 'hidden',
    borderRadius: '20vw',
    [theme.breakpoints.down('sm')]: {
      width: '50vw',
      height: '50vw',
      borderRadius: '50vw',
    },
  },
  aboutMe: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  }
}));

const Summary = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const summaryItems = useSelector((state) => state.fetchData.summary);

  const summaryMapped = summaryItems.map((summary, index) => {
    return (
      <SummaryItem key={index} summary={summary} />
    );
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="xl" className={classes.root} id="Summary">
      <Typography variant="h2" className={classes.subheader} > ABOUT</Typography>
      <div className={classes.summaryBig}>
        {summaryMapped}
      </div>
      <Container maxWidth="xl" className={classes.aboutMe}>
        <Container maxWidth="xl" >
          <img
            className={classes.image}
            alt="none"
            src="https://firebasestorage.googleapis.com/v0/b/phillagambino.appspot.com/o/signal-2019-04-11-132912.jpg?alt=media&token=5b92c7e5-ed74-440b-8108-6fa6d70742e5"
          />
          <Typography variant="h4" data-aos="fade-right" data-aos-duration="1000">
            Hi, I'm Phil
          </Typography>
        </Container>
        <Typography variant={theme.breakpoints.down('sm') ? "h6" : 'h4'} data-aos="fade-right" data-aos-duration="1000">
          I am a driven software engineer with 4+ years of industry experience in algorithm design, full stack development and ETL construction.
          Through out my professional career I have been able to work with many teams using a wide vareity of frameworks, languages and design patterns.
          In addition, I have actively pursued personal projects further enhancing my knowledge of additional stacks and tools.
        </Typography>
      </Container>
    </Container>
  );
};

export default Summary;
