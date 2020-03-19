import React, {useState, useEffect} from 'react';
import Logo from '../../Images/logo-2.png';
import Grow from '@material-ui/core/Grow';
import Header from '../Header';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, Container} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tag: {
    // fontFamily: 'Permanent Marker, cursive;',
    display: 'block',
    padding: '0em 2em 1em 2em',
    lineHeight: '1em',
    maxWidth: '850px',
    margin: '0 auto',
    fontSize: '22px',
    lineHeight: '1.5'
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
    
  }
})

function Home() {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();
  const classTypes = ['Pole', 'Aerial Silks', 'Yoga', 'Burlesque', 'Zumba', 'Hip Hop', 'Belly Dance', 'Salsa'];

  useEffect(() => {
    setChecked(prev => !prev)
    console.log(process.env.PUBLIC_URL);
  }, [])

  return (
    <Grow in={checked}>
      <Container className={classes.root}>
        <Grid container>
          <Grid item sm={12} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '80vh', alignItems: 'center' }}>
            <img src={Logo} width="800px" alt="The Floor is Yours Dance Center"/>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h4" align="center" className={classes.tag}>
            We are a diverse group of women, from New Jersey and New York, with a passion for Dance. We each bring our own expertise and styles: Pole, Aerial Skills, Yoga, Burlesque, Zumba, Hip Hop, Belly Dance and Salsa.
            <br />
            <br />
            At The Floor Is Yours Dance Center, our aim is to help other women feel confident, look good and have fun through dance. Available for individual lessons, bachelorette parties, and everything in between, we’re here to share our love of dance with you. 
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home;