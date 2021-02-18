import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Logo from '../../Images/logo-2.png';
import SocialIcons from '../SocialIcons/SocialIcons';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(5),
    textAlign: 'center',
    background: '#ffffff2c',
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10)
    }
  },
  content: {
    color: '#f2f2f2',
    fontSize: '14px',
  },
  email: {
    textDecoration: 'none',
    color: 'inherit',
    fontWeight: 'bold'
  },
  social: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '25px'
    }
  }
}))

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container  className={classes.root} justify="center">
      <Grid item sm={4} xs={12}>
        <img src={Logo} width="50%" alt="The Floor is Yours logo" />
      </Grid>
      <Grid item sm={6} xs={12}>
        <p className={classes.content}>2 Division Street, Suite 5</p>
        <p className={classes.content}>Somerville, NJ, 08876</p>
        <p className={classes.content}>
          <a href="tel:+1-732-694-0114" style={{color: 'inherit'}}>
          (732) 694-0114
          </a>
        </p>
        <p className={classes.content}>
          <a href="mailto:letsdance@thefloorisyoursdancecenter.com" className={classes.email}>letsdance@thefloorisyoursdancecenter.com</a>
        </p>
      </Grid>
      <Grid item sm={2} xs={12} className={classes.social}>
        <SocialIcons flexDirection="column" />
      </Grid>
    </Grid>
  )
}