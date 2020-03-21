import React, {useState, useEffect, Fragment} from 'react';
import Grow from '@material-ui/core/Grow';
import Header from '../Header';
import * as emailjs from 'emailjs-com';
import Map from '../../Images/somerville-map-the-floor-is-yours.jpg';
import {TextField, Paper, Container, makeStyles, Typography, Button, Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  image: {
    border: '1px solid white'
  }
}))

export default function Contact() {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
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
    emailjs.send(
      'gmail',
      'the_floor_is_yours',
      templateParams,
      'user_hj9lyTMwrU1mbY0EF1xh0'
     )
     .then(res => {
       console.log('SUCCESS!', res.status, res.text);
       setSent(true);
       clearForm();
     })
     .catch(err => console.log('FAILED...', err));
  }

  const clearForm = () => {
    setName('');
    setEmail('');
    setStyle('');
    setMessage('');
  }

  return (
    <Grow in={checked}>
      
        <Container className={classes.root}>
        <div className={classes.schedule}>
          <Header>Contact</Header>
          <Fragment>
            <Grid container className={classes.flex}>
              <Grid item md={6}>
                <Paper className={classes.card} >
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
              </Grid>
              <Grid item md={6}>
                <img src={Map} width="550px" alt="The Floor is Yours Dance Center" className={classes.image} />
              </Grid>
            </Grid>
          </Fragment>
          </div>
        </Container>
      
    </Grow>
  )
}