import React from "react";
import FooterItem from "./FooterItem/FooterItem";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '5px'
  }
}));

const Footer = (props) => {
  const classes = useStyles();
  const footerLinks = [
    {
      title: "FaLinkedin",
      link: "https://www.linkedin.com/in/phil-lagambino/",
    },
    { title: "FaGithub", link: "https://github.com/schnapple" },
  ];

  const footerLinksMapped = footerLinks.map((item, index) => {
    return <FooterItem key={index} item={item} />;
  });

  return (
    <div className={classes.root}>
      <Typography variant="s1" style={{ color: 'white', marginLeft: '5px' }}>© 2020 Phil LaGambino.</Typography>
      <div className={classes.icons}>{footerLinksMapped}</div>
    </div>
  );
};

export default Footer;
