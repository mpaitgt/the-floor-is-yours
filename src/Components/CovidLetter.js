import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Header from './Header';
import {Container, Grid, Box, Typography, Paper} from '@material-ui/core';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(10),
    maxWidth: '1200px',
  },
  about: {
    padding: theme.spacing(2),
  },
  headline: {
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '24px'
  },
  letter: {
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

function CovidLetter() {
  const classes = useStyles();  
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(prev => !prev);
    window.scrollTo(0, 0)
  }, [])

  return (
    <Grow in={checked}>
      {/* <Paper className={classes.root}> */}
        <Container className={classes.root}>
          <Grid container justify="center" alignItems="center" direction="row">
            <Grid item md={8} sm={12} xs={12}>
              <Box className={classes.about}>
              <Header>A letter about Covid-19</Header>
              <Typography variant="caption" className={classes.headline}>
                The Floor Is Yours Dance Center commits to member and community safety as we set the standard to re-open our dance studio in the months to come.
              </Typography>
              <Typography variant="body1" className={classes.letter}>
              To our family of The Floor Is Yours Dance Center clients and staff, 
              <br/><br/>
              As The Floor Is Yours Dance Center is given the green light from government officials to open up for business, we’re committed to our social obligation of safety and the wellbeing of our members and the communities that we serve. 
              <br/><br/>
              Just as The Floor Is Yours Dance Center led the initiative mid March to close the doors of our studio for the safety of our members and staff, we’re now leading the charge with a reopening protocol with that same safety and wellbeing of our members and staff in mind. 
              <br/><br/>
              The Floor Is Yours Protocol is an in-depth studio opening process which takes social distancing, facility disinfecting and modified exercises programming into consideration to ensure that both members and staff are safe. 
              <br/><br/>
              First, every member will be asked to disinfect their hands outside of the studio using the provided solution. The bottoms of shoes will also be disinfected to eliminate the transmission of viruses, germs and bacteria into the studio. 
              <br/><br/>
              The Floor Is Yours Dance Center will limit the capacity of the training group based on the size of our facility. Our location will have 8’x8’ floor spaces taped off for individual members to dance/ workout in. We’re calling this the “train in place” method. During the session, each client will stay in their 8’x8’ space and only touch the piece of equipment reserved for them in their space. This eliminates cross contamination of equipment and space. 
              <br/><br/>
              After every session, once the members exit the facility, the staff will do a thorough cleaning of the equipment and space used, as well as any surfaces that were touched, including the restrooms. 
              <br/><br/>
              Only after a session has ended, members have exited, and the studio has been cleaned will the staff welcome the next group of members to disinfect their hands and shoes and to come into the studio and enter their 8’x8’ training space for the next session.
              <br/><br/>
              We’ve taken the extra precaution to create a member waiting area outside of the facility that is taped off and designed to keep waiting members safely spaced out. 
              <br/><br/>
              Finally, at the end of each day we will deep clean and disinfect the entire studio, equipment, restrooms and surfaces to ensure the facility is clean and safe to use the following morning. 
              <br/><br/>
              Even with these precautions in place, we realize that some of our members still may not feel comfortable coming into the studio and that is why we’re committed to keeping our Floor Is Yours Dance Center On Demand online sessions available so that we can continue to serve our members at home with the same results driven sessions that you’ll find at our studio.
              <br/><br/>
              We realize that as a brand we have a social responsibility to our members, staff and the communities that we serve and we’re fully committed to doing whatever it takes to ensure the safety of everyone during these unusual times. 
              <br/><br/>
              #TFIYDCSTRONG
              <br/><br/>
              Rebekah Leo 
              <br/><br/>
              Founder and CEO 
              <br/><br/>
              May 5 , 2020
              </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      {/* </Paper> */}
    </Grow>
  )
}

export default CovidLetter;