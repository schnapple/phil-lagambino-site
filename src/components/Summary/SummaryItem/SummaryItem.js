import React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { DiModernizr, } from "react-icons/di";
import { GiCutDiamond, } from "react-icons/gi";
import { FiBox, FiTrendingUp } from "react-icons/fi";

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'space-around'
  },
  summary: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  subheader: {
    borderBottomStyle: 'solid',
    borderBottomColor: 'black',
  }
}));

const SummaryItem = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  let icon = null;
  switch (props.summary.icon) {
    case "IoIosSpeedometer":
      icon = <FiTrendingUp size="6vh" color={theme.palette.secondary.main} />;
      break;
    case "GrLineChart":
      icon = <GiCutDiamond size="6vh" color={theme.palette.secondary.main} />;
      break;
    case "GrObjectGroup":
      icon = <DiModernizr size="6vh" color={theme.palette.secondary.main} />;
      break;
    case "GrOptimize":
      icon = <FiBox size="6vh" color={theme.palette.secondary.main} />;
      break;
    default:
      return null;
  }

  return (
    <div>
      <Container data-aos="flip-down" data-aos-delay={props.summary.delay} data-aos-duration="1000">
        {icon}
      </Container>
      <Container data-aos="fade-in" data-aos-delay={props.summary.delay} data-aos-duration="500">
        <Typography variant="h4" className={classes.header}>{props.summary.title}</Typography>
        <Typography variant="h6">{props.summary.summary}</Typography>
      </Container>
    </div>
  );
};

export default SummaryItem;
