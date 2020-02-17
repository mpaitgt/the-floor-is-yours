import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Grid, Box, Typography} from '@material-ui/core';
import Image from '../../Images/cover-image-1500.png';
import Header from '../Header';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1000px'
  },
  about: {
    padding: theme.spacing(2),
  },
  paragraph: {
    marginTop: theme.spacing(3),
    fontSize: '16px',
    fontFamily: 'inherit'
  },
  image: {
    borderRadius: '50%',
    textAlign: 'center',
  }
}))

function About() {
  const classes = useStyles();  
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(prev => !prev)
  }, [])

  return (
    <Grow in={checked}>
      <Container className={classes.root}>
        <Grid container justify="center" alignItems="center" direction="row">
          <Grid item md={5} sm={12} xs={12}>
            <img src={Image} height="340" className={classes.image} alt="people dancing"/>
          </Grid>
          <Grid item md={7} sm={12} xs={12}>
            <Box className={classes.about}>
            <Header>About</Header>
            <Typography variant="body1" className={classes.paragraph}>
              Our goal at The Floor Is Yours Dance Center is to help our students boost their confidence, get in shape, have fun , meet new people and be the life of every party!
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              We have done this be creating a safe & fun enviroment for our students & having some of the most talented teachers in the state.
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              Our studio is Located right in the Heart of Downtown Somerville, NJ . You can check out our local stores on Division Street, grab a coffee at our local coffee shops or enjoy a night out with your girlfriends with some of the best Restaurants & Breweries we have to offer!
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              Your first class will always be on us ,stop in a little ealier or stay afterwards and meet your instructor and tell us a bit about yourself!
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              We are excited to have you join us at The Floor is Yours Dance Center! 
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              See you soon !
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default About;