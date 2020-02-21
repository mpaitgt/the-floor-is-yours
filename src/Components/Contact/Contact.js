import React, {useState, useEffect, Fragment} from 'react';
import Grow from '@material-ui/core/Grow';
import Header from '../Header';
import * as emailjs from 'emailjs-com';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  const classes = useStyles();

  useEffect(() => {
    setChecked(prev => !prev)
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    let templateParams = {
      name: name,
      email: email,
      style: style,
      message: message
    };

    console.log(templateParams);

    emailjs.send(
      'gmail',
      'the_floor_is_yours',
      templateParams,
      'user_hj9lyTMwrU1mbY0EF1xh0'
     )
     .then(res => console.log('SUCCESS!', res.status, res.text))
     .catch(err => console.log('FAILED...', err));

    // setInquiry({
    //   name: '',
    //   email: '',
    //   style: '',
    //   message: ''
    // });
  }

  const handleChange = e => {
    [e.target.name] = e.target.value
  }

  return (
    <Grow in={checked}>
      <Container className={classes.root}>
        <Header>Contact</Header>
        <Fragment>
          <Paper className={classes.card}>
            <Typography variant="headline">Get in touch!</Typography>
            <form style={{ margin: '0 auto', width: 'auto' }} onSubmit={event => handleSubmit(event)}>
              <TextField 
              onChange={e => setName(e.target.value)} 
              value={name} 
              color="inherit" 
              id="standard-basic" 
              name="name" 
              label="Name" 
              className={classes.input} 
              fullWidth/>

              <TextField 
              onChange={e => setEmail(e.target.value)} 
              value={email} 
              color="inherit" 
              id="standard-basic" 
              name="email" 
              label="Email" 
              className={classes.input} 
              fullWidth/>

              <TextField 
              onChange={e => setStyle(e.target.value)} 
              value={style} 
              color="inherit" 
              id="standard-basic" 
              name="style" 
              label="Which style of dance are you most interested in?" 
              className={classes.input} 
              fullWidth/>

              <TextField 
              id="outlined-multiline-static" 
              rows="10" 
              // label="Message" 
              label="Message"
              name="message"
              variant="outlined"
              className={classes.input}
              onChange={e => setMessage(e.target.value)}
              value={message}
              multiline
              fullWidth/>

              <Button type="submit" className={classes.button} variant="outlined">Submit</Button>
            </form>
          </Paper>
        </Fragment>
      </Container>
    </Grow>
  )
}