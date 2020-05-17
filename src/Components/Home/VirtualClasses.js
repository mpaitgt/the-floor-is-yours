import React from 'react';
import Header from '../Header';
import {Link} from 'react-router-dom';
import {Typography, Container, Button, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import pole from '../../Images/pole.png';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  imgItem: {
    alignSelf: 'center'
  },
  img: {
    width: '100%',
    borderRadius: '60% 50% 60% 50%'
  },
  text: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(8),
    alignSelf: 'center',
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
    fontSize: '18px',
    lineHeight: '28px',
    fontFamily: 'inherit',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    }
  }
}))

function VirtualClasses() {
  const classes = useStyles();

  return (
    <Container>
    <Grid container className={classes.container}>
      <Grid item md={7} className={classes.text}>
        <Header>Now offering virtual classes!</Header>
        <Typography className={classes.content}>
          Although our studio is closed to the public at this time, we're still here for you! We're offering virtual classes in everything from pole and burlesque to yoga, zumba, and barre! 
          <br/><br/>
          Click below to check out our complete schedule, and find out how you can still unleash your confidence. 
          <br/><br/>
          <Button className={classes.btn} variant="outlined">
            <Link className={classes.link} to="/schedule">
              View our schedule
            </Link>
          </Button>
        </Typography>
      </Grid>
      <Grid item md={5} className={classes.imgItem}>
        <img className={classes.img} src={pole} alt="pole-dancer"></img>
      </Grid>
    </Grid>
    </Container>
  )
}

export default VirtualClasses;