import React, {useState} from 'react';
import * as emailjs from 'emailjs-com';
import {TextField, Paper, makeStyles, Typography, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    padding: theme.spacing(5),
    margin: '0px auto 20px auto',
    background: 'var(--gradient)',
    fontFamily: 'Nanum Gothic, sans-serif',
    width: '400px'
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


export default function ContactForm({ sent, setSent }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/send-mail', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        style: style,
        message: message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => {
        if (data.response) {
          clearForm();
          setSent(true);
        } else {
          setError(true);
        }
      });
  }

  const clearForm = () => {
    setName('');
    setEmail('');
    setStyle('');
    setMessage('');
  }

  return (
    <Paper className={classes.card} >
      {
        error
        ?
        <Typography variant="h6" style={{ fontFamily: 'inherit', display: 'block', margin: '10px 0px', color: 'red' }}>
          Please fill in the form completely
        </Typography>
        :
        null
      }
      {
        !sent
        ?
        <div>
          <Typography variant="h5" style={{ fontFamily: 'inherit' }}>Get in touch!</Typography>
          <form onSubmit={event => handleSubmit(event)}>
            <TextField 
              onChange={e => setName(e.target.value)} 
              value={name} 
              color="primary" 
              id="standard-basic" 
              name="name" 
              label="Name" 
              className={classes.input} 
              fullWidth
            />
            <TextField 
              onChange={e => setEmail(e.target.value)} 
              value={email} 
              color="primary" 
              id="standard-basic" 
              name="email" 
              label="Email" 
              className={classes.input} 
              fullWidth
            />
            <TextField 
              onChange={e => setStyle(e.target.value)} 
              value={style} 
              color="primary" 
              id="standard-basic" 
              name="style" 
              label="Which style of dance are you most interested in?" 
              className={classes.input} 
              fullWidth
            />
            <TextField 
              id="outlined-multiline-static" 
              rows="10" 
              label="Message"
              name="message"
              variant="outlined"
              className={classes.input}
              onChange={e => setMessage(e.target.value)}
              value={message}
              multiline
              fullWidth
            />
            <Button type="submit" className={classes.button} variant="outlined">Submit</Button>
          </form>
        </div>
        :
        <h2>Thanks for your message!</h2>
      }
    </Paper>
  )
}