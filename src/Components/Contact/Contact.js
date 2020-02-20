import React, {useState, useEffect, Fragment} from 'react';
import Grow from '@material-ui/core/Grow';
import Header from '../Header';
import {TextField, Paper, Container, makeStyles, Typography, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: '100vh',
    // marginTop: '150px'
  },
  card: {
    width: '400px',
    padding: theme.spacing(5),
    margin: '0 auto',
    background: 'linear-gradient(30deg, #a9b0c0, #f2f2f2);',
    fontFamily: 'Nanum Gothic, sans-serif'
  },
  input: {
    display: 'block',
    marginBottom: theme.spacing(2),
    fontFamily: 'Nanum Gothic, sans-serif'
  },
  button: {
    padding: '10px 20px',
    letterSpacing: '2px',
    fontFamily: 'Nanum Gothic, sans-serif'
  }
}))

export default function Contact() {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setChecked(prev => !prev)
  }, [])

  return (
    <Grow in={checked}>
      <Container className={classes.root}>
        <Header>Contact</Header>
        <Fragment >

        
          <Paper className={classes.card}>
            <Typography variant="headline">Get in touch!</Typography>
            <form style={{ margin: '0 auto', width: 'auto' }}>
              <TextField color="inherit" id="standard-basic" label="Name" className={classes.input} fullWidth/>
              <TextField color="inherit" id="standard-basic" label="Email" className={classes.input} fullWidth/>
              <TextField color="inherit" id="standard-basic" label="Style" className={classes.input} fullWidth/>
              <TextField 
              id="outlined-multiline-static" 
              rows="10" 
              // label="Message" 
              label="Message"
              variant="outlined"
              className={classes.input}
              multiline
              fullWidth
              />

              <Button className={classes.button} variant="outlined">Submit</Button>
            </form>
          </Paper>
        </Fragment>
      </Container>
    </Grow>
  )
}