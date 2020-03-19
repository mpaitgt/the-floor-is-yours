import React, {useState, useEffect, useContext} from 'react';
import Header from '../Header';
import {makeStyles} from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import {Container, Grid, Typography} from '@material-ui/core';
// import ClassCard from './ClassCard';
// import {ScheduleContext} from '../Providers/ScheduleProvider';

const useStyles = makeStyles(theme => ({
  class: {
    maxWidth: '500px',
    margin: '0 auto',
    border: '1px solid white',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderRadius: '5px',
    background: '#ffffff1f'
  },
  paragraph: {
    marginTop: theme.spacing(3),
    fontSize: '16px',
    fontFamily: 'inherit',
    lineHeight: '24px'
  }
}))

function Classes() {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setChecked(prev => !prev)
  }, [])

  return ( 
    <Grow in={checked}>
      <Container className={classes.root}>
        <Header>
          Classes at The Floor is Yours
        </Header>
        <Grid container>
        <Typography variant="body1" className={classes.paragraph}>
          We offer a wide variety of dance classes. No matter what your passion, goal or ability level, you’re sure to find the perfect class for you. Each of our instructors are experts in their field, and ensure a friendly and supportive atmosphere in each class.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          The Floor Is Yours is the only dance studio in the NJ/NYC area that has all of these speciality classes under one roof! Click to read more about each style, and view class times.
        </Typography>
          <div className={classes.class}>
            <h2>Pole</h2>
            <p className={classes.paragraph}>A combination of dance and gymnastic moves, that work your whole body. Performed around a vertical pole in a flowing, graceful routine, Pole works to improve muscle tone, flexibility, coordination, posture as well as upper body and core.</p>
          </div>

          <div className={classes.class}>
            <h2>Aerial Skills</h2>
            <p className={classes.paragraph}>For those who love a thrill. Aerial silks is a great way to gain strength in the upper body, core and back muscles. It is physically demanding but is taught in a way which helps the students gain strength, coordination and confidence progressively in an encouraging environment.</p>
          </div>

          <div className={classes.class}>
            <h2>Salsa</h2>
            <p className={classes.paragraph}>Salsa is sexy, energetic, fun and extremely social. Immerse yourself in the rhythms of Latin America and experience this global dance phenomenon. Our classes are your chance to master essential Salsa steps in a friendly and energetic environment.</p>
          </div>

          <div className={classes.class}>
            <h2>Yoga</h2>
            <p className={classes.paragraph}>Our Yoga classes off-set the high intensity nature of our dance classes. With a mixture of Gentle, Restorative, Yin and Hatha yoga flows, to help improve flexibility and promote muscle tone. Yoga in our beautiful and calm studio, is the perfect antidote to a busy and stressful life.</p>
          </div>

          <div className={classes.class}>
            <h2>Hip Hop</h2>
            <p className={classes.paragraph}>Hip-Hop dance culture is extremely popular with lots of people joining street dancing groups and studios and even starting their own street dance crew. Hip hop is different from other styles of Street dance due to its freestyle and improvisational nature. Suitable for beginners, intermediate and advanced dancers.</p>
          </div>

          <div className={classes.class}>
            <h2>Burlesque</h2>
            <p className={classes.paragraph}>The ideal dance class if you want to learn some sexy moves, and grow your confidence, but think pole dancing classes might be a little too athletic. Burlesque is a time honoured art form, that is high in vintage glamour, classy with a sex twist, and tongue in cheek performance.</p>
          </div>

          <div className={classes.class}>
            <h2>Belly Dance</h2>
            <p className={classes.paragraph}>Belly dancing is a traditional west asian dance and is the perfect excuse to get dressed up in the exquisite outfits and have fun. Belly dance classes provide a great and enjoyable workout, help you feel empowered and are suitable for women of all ages.</p>
          </div>

          <div className={classes.class}>
          <h2>Street Hip Hop</h2>
          <p className={classes.paragraph}>We bring you modern street dance styles in a fresh flavour. We cover core techniques and put them into practice with choreography and freestyle. Learn moves to impress on the dance floor, to a soundtrack of the best contemporary and classic hip hop tracks.</p>
          </div>

          <div className={classes.class}>
            <h2>Heels Hip Hip</h2>
            <p className={classes.paragraph}>Heels Hip Hop is all about giving you the confidence you’ve always wanted wearing your favourite heels. Teaching you posture, poise and power, as well as classic hip hop dance moves. Strengthen your body while enjoying the freedom of feeling confident, to a playlist of empowering beats.</p>
          </div>

          <div className={classes.class}>
          <h2>Barre</h2>
          <p className={classes.paragraph}>Barre fitness combines ballet-inspired moves with elements of Pilates, dance, yoga and strength training. Using a ballet barre you’ll focus on high reps of small range movements as well as training yourself to hold your body still while you contract specific muscles, until you feel the burn!</p>
          </div>

          <div className={classes.class}>
            <h2>Pilates</h2>
            <p className={classes.paragraph}>Designed to balance the body through a series of specific exercises and controlled breathing. Pilates classes will help you focus on improving your postural alignment, core strength, mobility and awareness, and achieving a strong core foundation.</p>
          </div>
          
          <div className={classes.class}>
            <h2>Lap dance</h2>
            <p className={classes.paragraph}>Lap Dance will teach you how to wiggle, tease, bend and shimmy with confidence. Think of it as a great workout with a twist! Whether you have never quite dared to enter a sexy class, or are after some pro tips - lap dance will boost your confidence, and teach you skills you never knew you had.</p>
          </div>

          <div className={classes.class}>
            <h2>Sexy Floor Dance</h2>
            <p className={classes.paragraph}>Learn how to balance your up-the-pole tricks with floorwork and base of the pole moves. Sexy Floor Dance focuses on ways to travel across the floor and around the pole and give you new floor based tricks to add to routines. You can use heels for that sexier touch or just go barefoot if you prefer comfort.</p> 
          </div>

        </Grid>
      </Container>
    </Grow>
  )
}

export default Classes;
