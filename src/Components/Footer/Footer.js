import React from 'react';
import {Container, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Logo from '../../Images/logo-2.png';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(10),
    textAlign: 'center',
    background: '#ffffff2c',
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    color: '#f2f2f2'
  },
  email: {
    textDecoration: 'none',
    color: 'inherit',
    fontWeight: 'bold'
  }
}))

export default function Footer() {
  const classes = useStyles();

  return (
    // <Container className={classes.root}>
      <Grid container  className={classes.root} justify="center">
        <Grid item sm={2} />
        <Grid item sm={4}>
          <img src={Logo} width="50%" alt="The Floor is Yours logo" />
        </Grid>
        <Grid item sm={6}>
          <p className={classes.content}>2 Division Street, Suite 5</p>
          <p className={classes.content}>Somerville, NJ, 08876</p>
          <p className={classes.content}>
            Email: <a href="mailto:letsdance@thefloorisyoursdancecenter.com" className={classes.email}>letsdance@thefloorisyoursdancecenter.com</a>
          </p>
          
          
          {/* <p className={classes.content}></p> */}
        </Grid>
      </Grid>
    // </Container>
  )
}