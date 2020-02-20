import React, {Fragment, useState, useEffect} from 'react';
import Logo from '../../Images/logo-2.png';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, Container, Box} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tag: {
    fontFamily: 'Permanent Marker, cursive;',
    display: 'block',
    padding: '0em 2em 1em 2em',
    lineHeight: '1em',
    maxWidth: '850px',
    margin: '0 auto'
  },
  list: {
    maxWidth: '800px',
    margin: '2em auto',
    textAlign: 'center',
    padding: '2em'
  },
  content: {
    fontFamily: 'Nanum Gothic, sans-serif',
    fontSize: '22px',
    maxWidth: '700px',
    margin: '80px auto 0px auto'
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
          <Grid item sm={12} style={{ textAlign: 'center' }}>
            <img src={Logo} width="50%" alt="The Floor is Yours Logo"/>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h4" align="center" className={classes.tag}>
              We are a diverse group of women from different locations around New Jersey and New York. 
            </Typography>
          </Grid>
          <Fragment className={classes.twocolumn}>
            <Grid item sm={12} justify="center">
              <Typography variant="body1" align="center" className={classes.content}>
                One thing we all have in common is our passion for dance, we specialize in diffrent styles of dance:
                <Box style={{ marginTop: '20px' }}>
                {classTypes.map(item => {
                  return (
                    <div className={classes.classType}>
                      {item}
                    </div>

                  )
                })}
                </Box>
              </Typography>
            </Grid>
          </Fragment>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home;