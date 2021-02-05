import React from "react";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ImageFader } from "react-image-cycling-tool"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerDiv: {
    marginBottom: '20px'
  },
  imageFaderDiv: {
    width: '80%',
    height: '400px',
    marginBottom: '20px'
  },
  imageFaderDiv: {
    marginTop: '10px',
    width: '80%',
    height: '400px',
    marginBottom: '20px'
  },
  github: {
    position: 'fixed',
    top: 10,
    right: 10
  }
}));

const ImageCyclingDemo = () => {
  const images = ["https://cdn.pixabay.com/photo/2020/07/06/07/47/road-5375897_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/10/06/12/17/lake-5632072_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/07/10/01/17/time-5389154_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/09/03/13/27/dahlia-5541244_960_720.jpg"]
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.headerDiv}>
        <Typography variant="h2" >React Image Cycling Tool Demo</Typography>
        <Typography variant="h6" >This page demonstrates the multiple options available to use with the react image cycling tool.</Typography>
      </div>
      <Typography variant="h4" >Stretch Demo</Typography>
      <Typography variant="p" >The stretch variant will distort the image to fit the parent object's dimensions.</Typography>
      <div className={classes.imageFaderDiv}>
        <ImageFader background="rgb(219, 218, 213)"
          images={images}
          width={.5}
          height={1}
          objectFit="stretch" />
      </div>
      <Typography variant="h4" >Fit Demo</Typography>
      <Typography variant="p" >The fit variant will crop out a central portion of the original and expand the resulting image to fit the parent object's dimensions.</Typography>
      <div className={classes.imageFaderDiv}>
        <ImageFader background="rgb(219, 218, 213)"
          images={images}
          width={.5}
          height={1}
          objectFit="fit" />
      </div>
      <Divider />
      <Typography variant="h4" >Natrual Demo</Typography>
      <Typography variant="p" >The natural variant will not distort the image and use the image's original dimension. The image will be cropped if it is larger than its parent object.</Typography>
      <div className={classes.imageFaderDiv}>
        <ImageFader background="rgb(219, 218, 213)"
          images={images}
          width={.5}
          height={1}
          objectFit="natural" />
      </div>
      <IconButton onClick={() => {
        window.open(
          "https://github.com/schnapple/react-image-cycling-tool",
          "_blank"
        )
      }}
        className={classes.github}>
        <GitHubIcon color="primary" style={{ fontSize: "48px" }} />
      </IconButton>
    </div>
  );
};

export default ImageCyclingDemo;
