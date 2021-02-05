import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from "../Carousel/Carousel";
import ProjectItem from "./ProjectItem/ProjectItem"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(223, 219, 219, 0.199)'
  },
  subheader: {
    color: theme.palette.primary.main,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.primary.main,
    marginTop: '20px'
  },
}));

const Portfolio = (props) => {
  const classes = useStyles()
  const projectItems = useSelector((state) => state.fetchData.portfolio);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectItemsMapped = projectItems.map((project, index) => {
    return (
      <ProjectItem key={index} index={index} project={project} />
    );
  });

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.subheader} >PORTFOLIO</Typography>
      <Hidden smDown>
        <Carousel />
      </Hidden>
      <Hidden smUp>
        {projectItemsMapped}
      </Hidden>
    </div>
  );
};

export default Portfolio;
