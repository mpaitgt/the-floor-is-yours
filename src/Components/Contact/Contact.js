import React, {useState, useEffect, Fragment} from 'react';
import Grow from '@material-ui/core/Grow';
import Header from '../Header';
import ContactForm from './ContactForm';
import Map from '../../Images/somerville-map-the-floor-is-yours.jpg';
import {Container, makeStyles, Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  image: {
    border: '1px solid white',
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(4)
    },
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  }
}))

export default function Contact() {
  const [checked, setChecked] = useState(false);
  const [sent, setSent] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setChecked(prev => !prev);
    setSent(false);
  }, [])

  return (
    <Grow in={checked}>
      
        <Container className={classes.root}>
        <div className={classes.schedule}>
          <Header>Contact</Header>
          <Fragment>
            <Grid container className={classes.flex}>
              <Grid item lg={6} md={12} sm={12}>
                <ContactForm setSent={setSent} sent={sent} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} style={{textAlign: 'center'}}>
                <img src={Map} alt="The Floor is Yours Dance Center" className={classes.image} />
              </Grid>
            </Grid>
          </Fragment>
          </div>
        </Container>
      
    </Grow>
  )
}