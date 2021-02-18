import React, {useState, useEffect} from 'react';
import Logo from '../../Images/logo-2-with-tagline.png';
import Grow from '@material-ui/core/Grow';
import WhoAreWe from './WhoAreWe';
import VirtualClasses from './VirtualClasses';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  homePage: {
    height: '100vh',
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    width: '90%',
    margin: '0 auto'
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  iframe: {
    width: '560px',
    height: '316px',
    [theme.breakpoints.down('lg')]: {
      width: '560px',
      height: '316px',
    },
    [theme.breakpoints.down('md')]: {
      width: '461px',
      height: '260px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '355px',
      height: '200px',
    },
  },
  image: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '400px'
    },
  }
}));

function Home() {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setChecked(prev => !prev)
  }, [])

  return (
    <Grow in={checked}>
      <div>
        <div className={classes.homePage}>
          <Grid container className={classes.flex}>
            <Grid item md={6} sm={12} xs={12} align="center">
              <iframe 
                src="https://www.youtube.com/embed/ycjmKCQA9FQ"
                className={classes.iframe}
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </Grid>
            <Grid item md={6} sm={12} xs={12} align="center">
              <img src={Logo} alt="The Floor is Yours Dance Center" className={classes.image} />
            </Grid>
          </Grid>
        </div>
        <Grid container>
          <Grid item sm={12}>
            <WhoAreWe />
            <VirtualClasses />
          </Grid>
        </Grid>
      </div>
    </Grow>
  )
}

export default Home;