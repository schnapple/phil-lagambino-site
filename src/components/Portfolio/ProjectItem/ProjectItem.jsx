import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: '80vw',
    height: '100vw',
    objectFit: 'cover',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: '10px'
  },
}));

const ProjectItem = (props) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={props.project.imageUrl}
        alt="new"
      />
    </div>
  );
};

export default ProjectItem;
