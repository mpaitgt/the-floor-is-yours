import React from 'react';
import Header from '../Header';
import {Typography, Container, Grid, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import silks from '../../Images/silks.png';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    background: 'var(--banner)'
  },
  imgItem: {
    alignSelf: 'center'
  },
  img: {
    width: '100%',
    borderRadius: '60% 50% 60% 50%'
  },
  text: {
    paddingLeft: theme.spacing(8),
    alignSelf: 'center',
  },
  btn: {
    color: 'var(--white)',
    border: '1px solid var(--white)'
  },
  content: {
    padding: theme.spacing(2),
    maxWidth: '850px',
    margin: '0 auto',
    fontSize: '18px',
    lineHeight: '28px',
    fontFamily: 'inherit',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    }
  }
}))

function WhoAreWe() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item md={5} className={classes.imgItem}>
        <img className={classes.img} src={silks} alt="silks-acrobat"/>
      </Grid>
        <Grid item md={7} className={classes.text}>
          <Header>Who are we?</Header>
          <Typography className={classes.content}>
            We are a diverse group of women, from New Jersey and New York, with a passion for Dance. We each bring our own expertise and styles: Pole, Aerial&nbsp;Silks, Yoga, Burlesque, Zumba, Hip&nbsp;Hop, Belly&nbsp;Dance&nbsp;and&nbsp;Salsa.
            <br/><br/>
            At The Floor Is Yours Dance Center, our aim is to help other women feel confident, look good and have fun through dance. Available for individual lessons, bachelorette parties, and everything in between, we’re here to share our love of dance&nbsp;with&nbsp;you. 
            <br/><br/>
            <Button className={classes.btn} variant="outlined">Follow us!</Button>
          </Typography>
      </Grid>
    </Grid>
  )
}

export default WhoAreWe;