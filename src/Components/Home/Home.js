import React, {useState, useEffect} from 'react';
import Logo from '../../Images/logo-2-with-tagline.png';
import Grow from '@material-ui/core/Grow';
import Header from '../Header';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography, Container} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tag: {
    // fontFamily: 'Permanent Marker, cursive;',
    display: 'block',
    padding: '0em 2em 1em 2em',
    maxWidth: '850px',
    margin: '0 auto',
    fontSize: '18px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
    lineHeight: '1.5',
    fontFamily: 'inherit'
  },
  list: {
    maxWidth: '800px',
    margin: '2em auto',
    textAlign: 'center',
    padding: '2em'
  },
  content: {
    fontFamily: 'Nanum Gothic, sans-serif',
    fontSize: '16px',
    maxWidth: '700px',
    margin: '00px auto 0px auto'
  },
  classType: {
    display: 'inline-block',
    margin: '16px',
    fontFamily: 'Nanum Gothic, sans-serif'
  },
  twocolumn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0em 2em 1em 2em',
  },
  image: {
    width: '1000px',
    [theme.breakpoints.down('md')]: {
      width: '800px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '600px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  }
}));

function Home() {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setChecked(prev => !prev)
  }, [])

  return (
    <Grow in={checked}>
      <Container className={classes.root}>
        <Grid container>
          <Grid item sm={12} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '100px' }}>
            <img src={Logo} alt="The Floor is Yours Dance Center" className={classes.image} />
          </Grid>
          <Grid item sm={12}>
            <div style={{ textAlign: 'center' }}>
              <Header>Who are we?</Header>
            </div>
            <Typography variant="h4" align="center" className={classes.tag}>
            We are a diverse group of women, from New Jersey and New York, with a passion for Dance. We each bring our own expertise and styles: Pole, Aerial&nbsp;Silks, Yoga, Burlesque, Zumba, Hip&nbsp;Hop, Belly&nbsp;Dance&nbsp;and&nbsp;Salsa.
            <br />
            <br />
            At The Floor Is Yours Dance Center, our aim is to help other women feel confident, look good and have fun through dance. Available for individual lessons, bachelorette parties, and everything in between, we’re here to share our love of dance&nbsp;with&nbsp;you. 
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home;