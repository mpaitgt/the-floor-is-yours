import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Grid, Typography} from '@material-ui/core';
import Header from '../Header';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1000px',
    marginTop: theme.spacing(10)
  },
  paragraph: {
    fontFamily: 'inherit',
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    },
  },
  image: {
    borderRadius: '50% 40% 60% 40%',
    boxShadow: '0px 0px 6px 4px rgba(0,0,0,0.1)',
    margin: '0 auto',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    display: 'inline-block'
  },
  image2: {
    width: '100%'
  },
  tfiy: {
    fontFamily: 'inherit',
    // textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}))

function About() {
  const classes = useStyles();  
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(prev => !prev);
    window.scrollTo(0, 0);
  }, [])

  return (
    <Grow in={checked}>
      <Container className={classes.root}>
        <Header variant="h2">About Us</Header>
        <Grid container direction="row" alignContent="space-between" alignItems="center">

          <Grid item md={4} sm={4} xs={12} style={{textAlign: "center"}}>
            <img src="https://res.cloudinary.com/tfiy/image/upload/v1606952142/the-floor-is-yours/about-page/9N7A8170_azjk4u.jpg" alt="hello" height="260" className={classes.image} />
          </Grid>
          <Grid item md={8} sm={8} xs={12}>
            <Typography variant="body1" className={classes.paragraph}>
              Are you looking for a dance studio with a friendly, fun and supportive atmosphere? Are you ready to get in shape and boost your confidence? Do you want to be the life of every party, and truly feel like you own the dance floor?
              <br/><br/>
              The Floor Is Yours Dance Center is a professional dance studio right in the heart of downtown Somerville, NJ. Our goal was to provide a safe and supportive, yet fun and exciting, environment for women of all walks of life who have a love of dance.<br/><br/>
              <br/>
            </Typography>
          </Grid>

          <Grid item md={8} sm={8} xs={12}>
            <Typography variant="body1" className={classes.paragraph}>
              Our instructors are some of the most talented in the state, and are here to share their passion, and help you achieve your goals through dance. Whether it be to get fit, meet new people, start a new hobby or simply have fun - they’re here to help you every step of the way.
              <br/><br/>
              As well as dance lessons, we’re also the perfect choice for private and bachelorette parties. The studio is perfectly placed next to the best stores, coffee shops, restaurants and bars NJ has to offer. So you and the girls can enjoy a fun lesson, and then head straight out to enjoy the rest of your day and evening.
            </Typography>
          </Grid>
          <Grid item md={4} sm={4} xs={12} style={{textAlign: "center"}}>
            <img src="https://res.cloudinary.com/tfiy/image/upload/v1606952142/the-floor-is-yours/about-page/9N7A7528_d7uoip.jpg" alt="hello" height="260" className={classes.image} />
          </Grid>

          <Typography variant="body1" className={classes.tfiy}>
            We’re so convinced you’ll love The Floor Is Yours, that your first class is always on us. Feel free to come earlier, so stay behind to meet our instructors and the other dance students. We are excited to have you join us at The Floor Is Yours!
          </Typography>

          <Grid item md={4} sm={4} xs={12} style={{textAlign: "center" }}>
            <img src="https://res.cloudinary.com/tfiy/image/upload/v1606952142/the-floor-is-yours/about-page/9N7A7803_uq4ona.jpg" alt="hello" width="280" className={classes.image} />
          </Grid>
          <Grid item md={4} sm={4} xs={12} style={{textAlign: "center"}}>
            <img src="https://res.cloudinary.com/tfiy/image/upload/v1606952142/the-floor-is-yours/about-page/9N7A7557_hwmnki.jpg" alt="hello" width="280" className={classes.image} />
          </Grid>
          <Grid item md={4} sm={4} xs={12} style={{textAlign: "center"}}>
            <img src="https://res.cloudinary.com/tfiy/image/upload/v1606952142/the-floor-is-yours/about-page/9N7A7938_bcv41d.jpg" alt="hello" width="280" className={classes.image} />
          </Grid>

        </Grid>
      </Container>
    </Grow>
  )
}

export default About;
