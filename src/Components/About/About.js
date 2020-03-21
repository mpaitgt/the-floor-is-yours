import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Grid, Box, Typography} from '@material-ui/core';
import Header from '../Header';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1000px',
  },
  about: {
    padding: theme.spacing(2),
  },
  paragraph: {
    marginTop: theme.spacing(3),
    fontFamily: 'inherit',
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
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
          {/* <Grid item md={4} sm={12} xs={12}>
            <img src={Image} height="300" className={classes.image} alt="people dancing"/>
          </Grid> */}
          <Grid item md={8} sm={12} xs={12}>
            <Box className={classes.about}>
            <Header>About Us</Header>
            <Typography variant="body1" className={classes.paragraph}>
              Are you looking for a dance studio with a friendly, fun and supportive atmosphere? Are you ready to get in shape and boost your confidence? Do you want to be the life of every party, and truly feel like you own the dance floor?
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              The Floor Is Yours Dance Center is a professional dance studio right in the heart of downtown Somerville, NJ. Our goal was to provide a safe and supportive, yet fun and exciting, environment for women of all walks of life who have a love of dance.
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              Our instructors are some of the most talented in the state, and are here to share their passion, and help you achieve your goals through dance. Whether it be to get fit, meet new people, start a new hobby or simply have fun - they’re here to help you every step of the way.
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              As well as dance lessons, we’re also the perfect choice for private and bachelorette parties. The studio is perfectly placed next to the best stores, coffee shops, restaurants and bars NJ has to offer. So you and the girls can enjoy a fun lesson, and then head straight out to enjoy the rest of your day and evening.
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              We’re so convinced you’ll love The Floor Is Yours, that your first class is always on us. Feel
              free to come earlier, so stay behind to meet our instructors and the other dance students.
              We are excited to have you join us at The Floor Is Yours!
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default About;