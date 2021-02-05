import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as writeAction from "../../store/actions/writeMessage";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  formCont: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: '10px'
  },
  submitCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  input: {
    marginBottom: '10px',
  },
  inputColor: {
    color: 'white'
  }
}));

const Contact = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [valid, setValid] = useState(true);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const message = useState();

  const buttonHandler = () => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      console.log("Message Sent");
      setValid(true);
      dispatch(writeAction.writeMessage(name, email, message));
    } else {
      console.log("ERROR: Bad Email");
      setValid(false);
    }
  };

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h2" style={{ color: 'white', borderBottomStyle: 'solid', borderBottomColor: 'white' }} >CONTACT</Typography>
      <Typography variant="h4" color="secondary" >Always interested in talking.</Typography>
      <Container className={classes.formCont}>
        <TextField
          className={classes.input}
          InputProps={{ className: classes.inputColor }}
          InputLabelProps={{ className: classes.inputColor }}
          color="secondary"
          variant="standard"
          label="Name"
          onChange={(event) => setName(event.target.value)} />
        <TextField
          className={classes.input}
          InputProps={{ className: classes.inputColor }}
          InputLabelProps={{ className: classes.inputColor }}
          color="secondary"
          variant="standard"
          label="Email"
          onChange={(event) => setEmail(event.target.value)} />
        <TextField
          InputProps={{
            className: classes.inputColor
          }}
          InputLabelProps={{
            className: classes.inputColor
          }}
          rows='15'
          className={classes.input}
          id="outlined-basic"
          variant="standard"
          label="Message"
          multiline
          onChange={(event) => setEmail(event.target.value)}
          color="secondary" />
        <div className={classes.submitCont}>
          <Button variant="outlined" color="secondary" onClick={buttonHandler} style={{ marginRight: '10px' }}>
            Submit
          </Button>
          {valid ? null : (
            <Typography variant="p" color="secondary">Invalid Email Format</Typography>
          )}
        </div>
      </Container>
    </Container >
  );
};

export default Contact;
