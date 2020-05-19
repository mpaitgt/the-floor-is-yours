import React, {useState, useEffect} from 'react';
import Logo from '../../Images/logo-2-with-tagline.png';
import Grow from '@material-ui/core/Grow';
import WhoAreWe from './WhoAreWe';
import VirtualClasses from './VirtualClasses';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  homePage: {
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh'
  },
  image: {
    width: '1000px',
    [theme.breakpoints.down('md')]: {
      width: '800px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
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
      <Grid container>
        <Grid item sm={12} className={classes.homePage}>
          <img src={Logo} alt="The Floor is Yours Dance Center" className={classes.image} />
        </Grid>
        <Grid item sm={12}>
          <WhoAreWe />
          <VirtualClasses />
        </Grid>
      </Grid>
    </Grow>
  )
}

export default Home;