import React, { useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  spacer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'start'
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const [displayMenu, setDisplayMenu] = useState(false);

  const onClickNavigate = (refVal) => {
    window.scrollTo({
      top: refVal.current.offsetTop,
      behavior: "smooth",
    });
  };

  const onResumeClickHandler = () => {
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/phillagambino.appspot.com/o/PhilResume_Q22020.pdf?alt=media&token=99a9738e-9363-46b3-b6e6-6746bcab22c9",
      "_blank"
    )
  }

  const handleMenuClick = () => {
    setDisplayMenu(!displayMenu);
  }

  const hiddenMenuNavClick = (refVal) => {
    onClickNavigate(refVal)
    setDisplayMenu(!displayMenu);
  }

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" edge="start" className={classes.spacer}>
          Phil LaGambino
          </Typography>
        <Hidden smDown>
          <Button onClick={() => onClickNavigate(props.aboutRef)} color="inherit">About</Button>
          <Button onClick={() => onClickNavigate(props.portRef)} color="inherit">Portfolio</Button>
          <Button onClick={() => onClickNavigate(props.conRef)} color="inherit">Contact</Button>
          <Button onClick={onResumeClickHandler} color="secondary">Resume</Button>
        </Hidden>
        <Hidden smUp>
          <IconButton onClick={handleMenuClick}>
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
        </Hidden>
      </Toolbar>
      {displayMenu &&
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button onClick={() => hiddenMenuNavClick(props.aboutRef)} color="inherit">About</Button>
          <Button onClick={() => hiddenMenuNavClick(props.portRef)} color="inherit">Portfolio</Button>
          <Button onClick={() => hiddenMenuNavClick(props.conRef)} color="inherit">Contact</Button>
          <Button onClick={onResumeClickHandler} color="secondary">Resume</Button>
        </div>
      }
    </AppBar>
  );
};

export default NavBar;
