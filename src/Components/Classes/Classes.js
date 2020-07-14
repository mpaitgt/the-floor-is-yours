import React, {useState, useEffect} from 'react';
import Header from '../Header';
import {makeStyles} from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import {Container, Grid, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    maxWidth: '1000px'
  },
  class: {
    margin: '0 auto',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderRadius: '5px',
  },
  paragraph: {
    marginTop: theme.spacing(3),
    fontFamily: 'inherit',
    lineHeight: '24px',
    fontSize: '16px',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px'
    }
  },
  desc: {
    fontSize: '16px',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
      fontFamily: 'inherit',
      lineHeight: '24px',
    }
  }
}))

function Classes() {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setChecked(prev => !prev);
    window.scrollTo(0, 0);
  }, [])

  return ( 
    <Grow in={checked}>
      <Container className={classes.root}>
        <Header variant="h2">
          Classes at The Floor is Yours
        </Header>
        <div>
          <Typography variant="body1" className={classes.paragraph}>
            We offer a wide variety of dance classes. No matter what your passion, goal or ability level, you’re sure to find the perfect class for you. Each of our instructors are experts in their field, and ensure a friendly and supportive atmosphere in&nbsp;each&nbsp;class.
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            The Floor Is Yours is the only dance studio in the NJ/NYC area that has all of these speciality classes under one roof! Click to read more about each style, and&nbsp;view&nbsp;class&nbsp;times.
          </Typography>
        </div>
        <Grid container>
          <Grid item md={12} className={classes.class}>
            <Header variant="h4">Pole</Header>
            <Typography variant="body1" className={classes.paragraph}>A combination of dance and gymnastic moves, that work your whole body. Performed around a vertical pole in a flowing, graceful routine, Pole works to improve muscle tone, flexibility, coordination, posture as well as upper body and core.</Typography>
          </Grid>

          <div className={classes.class}>
            <Header variant="h4">Aerial Silks</Header>
            <Typography variant="body1" className={classes.paragraph}>For those who love a thrill. Aerial silks is a great way to gain strength in the upper body, core and back muscles. It is physically demanding but is taught in a way which helps the students gain strength, coordination and confidence progressively in an encouraging environment.</Typography>
          </div>

          <div className={classes.class}>
            <Header variant="h4">Salsa</Header>
            <Typography variant="body1" className={classes.paragraph}>Salsa is sexy, energetic, fun and extremely social. Immerse yourself in the rhythms of Latin America and experience this global dance phenomenon. Our classes are your chance to master essential Salsa steps in a friendly and energetic environment.</Typography>
          </div>

          <div className={classes.class}>
            <Header variant="h4">Yoga</Header>
            <Typography variant="body1" className={classes.paragraph}>Our Yoga classes off-set the high intensity nature of our dance classes. With a mixture of Gentle, Restorative, Yin and Hatha yoga flows, to help improve flexibility and promote muscle tone. Yoga in our beautiful and calm studio, is the perfect antidote to a busy and stressful life.</Typography>
          </div>

          <div className={classes.class}>
            <Header variant="h4">Hip Hop</Header>
            <Typography variant="body1" className={classes.paragraph}>Hip-Hop dance culture is extremely popular with lots of people joining street dancing groups and studios and even starting their own street dance crew. Hip hop is different from other styles of Street dance due to its freestyle and improvisational nature. Suitable for beginners, intermediate and advanced dancers.</Typography>
          </div>

          <div className={classes.class}>
            <Header variant="h4">Burlesque</Header>
            <Typography variant="body1" className={classes.paragraph}>The ideal dance class if you want to learn some sexy moves, and grow your confidence, but think pole dancing classes might be a little too athletic. Burlesque is a time honoured art form, that is high in vintage glamour, classy with a sex twist, and tongue in cheek performance.</Typography>
          </div>

          <div className={classes.class}>
            <Header variant="h4">Belly Dance</Header>
            <Typography variant="body1" className={classes.paragraph}>Belly dancing is a traditional west asian dance and is the perfect excuse to get dressed up in the exquisite outfits and have fun. Belly dance classes provide a great and enjoyable workout, help you feel empowered and are suitable for women of all ages.</Typography>
          </div>

          <div className={classes.class}>
            <Header variant="h4">Street Hip Hop</Header>
            <Typography variant="body1" className={classes.paragraph}>We bring you modern street dance styles in a fresh flavour. We cover core techniques and put them into practice with choreography and freestyle. Learn moves to impress on the dance floor, to a soundtrack of the best contemporary and classic hip hop tracks.</Typography>
          </div>

          <div className={classes.class}>
            <Header variant="h4">Heels Hip Hip</Header>
            <Typography variant="body1" className={classes.paragraph}>Heels Hip Hop is all about giving you the confidence you’ve always wanted wearing your favourite heels. Teaching you posture, poise and power, as well as classic hip hop dance moves. Strengthen your body while enjoying the freedom of feeling confident, to a playlist of empowering beats.</Typography>
          </div>

          <div className={classes.class}>
            <Header variant="h4">Barre</Header>
            <Typography variant="body1" className={classes.paragraph}>Barre fitness combines ballet-inspired moves with elements of Pilates, dance, yoga and strength training. Using a ballet barre you’ll focus on high reps of small range movements as well as training yourself to hold your body still while you contract specific muscles, until you feel the burn!</Typography>
          </div>

          <div className={classes.class}>
            <Header variant="h4">Pilates</Header>
            <Typography variant="body1" className={classes.paragraph}>Designed to balance the body through a series of specific exercises and controlled breathing. Pilates classes will help you focus on improving your postural alignment, core strength, mobility and awareness, and achieving a strong core foundation.</Typography>
          </div>
          
          <div className={classes.class}>
            <Header variant="h4">Lap dance</Header>
            <Typography variant="body1" className={classes.paragraph}>Lap Dance will teach you how to wiggle, tease, bend and shimmy with confidence. Think of it as a great workout with a twist! Whether you have never quite dared to enter a sexy class, or are after some pro tips - lap dance will boost your confidence, and teach you skills you never knew you had.</Typography>
          </div>

          <div className={classes.class}>
            <Header variant="h4">Exotic Floor Dance</Header>
            <Typography variant="body1" className={classes.paragraph}>Learn how to balance your up-the-pole tricks with floorwork and base of the pole moves. Sexy Floor Dance focuses on ways to travel across the floor and around the pole and give you new floor based tricks to add to routines. You can use heels for that sexier touch or just go barefoot if you prefer comfort.</Typography> 
          </div>

        </Grid>
      </Container>
    </Grow>
  )
}

export default Classes;
