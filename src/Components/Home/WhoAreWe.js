import React from 'react';
import Header from '../Header';
import {Link} from 'react-router-dom';
import {Typography, Container, Grid, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import silks from '../../Images/silks.png';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  imgItem: {
    alignSelf: 'center'
  },
  img: {
    width: '100%',
    borderRadius: '60% 50% 60% 50%',
  },
  text: {
    paddingLeft: theme.spacing(8),
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(0),
      justifySelf: 'center'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  btn: {
    color: 'var(--white)',
    border: '1px solid var(--white)'
  },
  content: {
    padding: theme.spacing(2),
    maxWidth: '850px',
    margin: '0 auto',
    fontSize: '16px',
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
    <Container>
    <Grid container className={classes.container}>
      <Grid item md={5} sm={8} className={classes.imgItem}>
        <img className={classes.img} src={silks} alt="silks-acrobat"/>
      </Grid>
      <Grid item md={7} sm={12} className={classes.text}>
        <Typography className={classes.content}>
          <Header variant="h4">Who are we?</Header>
          We are a diverse group of women, from New Jersey and New York, with a passion for Dance. We each bring our own expertise and styles: Pole, Aerial&nbsp;Silks, Yoga, Burlesque, Zumba, Hip&nbsp;Hop, Belly&nbsp;Dance&nbsp;and&nbsp;Salsa.
          <br/><br/>
          At The Floor Is Yours Dance Center, our aim is to help other women feel confident, look good and have fun through dance. Available for individual lessons, bachelorette parties, and everything in between, we’re here to share our love of dance&nbsp;with&nbsp;you. 
          <br/><br/>
          <Button className={classes.btn} variant="outlined">
            <Link className={classes.link} to="/about">
              Learn more
            </Link>
          </Button>
        </Typography>
      </Grid>
    </Grid>
    </Container>
  )
}

export default WhoAreWe;