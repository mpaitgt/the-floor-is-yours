import React, {useState, useEffect, Fragment} from 'react';
import Grow from '@material-ui/core/Grow';
import Header from '../Header';
import ContactForm from './ContactForm';
import Map from '../../Images/somerville-map-the-floor-is-yours.jpg';
import {Container, makeStyles, Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    maxWidth: '1200px'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2)
  },
  card: {
    padding: theme.spacing(5),
    margin: '0 auto',
    background: 'linear-gradient(30deg, #a9b0c0, #f2f2f2);',
    fontFamily: 'Nanum Gothic, sans-serif',
    width: '400px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: '0'
    }
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
  const [sent, setSent] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setChecked(prev => !prev);
    setSent(false);
    window.scrollTo(0, 0);
  }, [])

  return (
    <Grow in={checked}>
      <Container className={classes.root}>
        <div className={classes.schedule}>
          <Header variant="h2">Contact</Header>
          <Fragment>
            <Grid container className={classes.flex}>
              <Grid item lg={6} md={12} sm={12}>
                <ContactForm setSent={setSent} sent={sent} />
              </Grid>
              <Grid item lg={6} md={12} sm={12}>
                <iframe 
                  style={{ width: '100%', height: '450px' }}
                  title="Map to The Floor Is Yours" 
                  frameborder="0" 
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJfTrCrkuVw4kR9wLsf3G7UIE&key=AIzaSyD-hTdwApWRQYmKyctDs8yoHJqRSAdUqpg" 
                  allowfullscreen 
                />
              </Grid>
            </Grid>
          </Fragment>
        </div>
      </Container>
    </Grow>
  )
}

