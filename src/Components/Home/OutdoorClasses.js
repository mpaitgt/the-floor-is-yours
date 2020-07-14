import React from 'react';
import Header from '../Header';
import {Link} from 'react-router-dom';
import {Typography, Container, Button, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import pole from '../../Images/pole.png';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
    }
  },
  imgItem: {
    alignSelf: 'center',
  },
  img: {
    width: '100%',
    borderRadius: '60% 50% 60% 50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '0 auto'
    },
  },
  text: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(8),
    alignSelf: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  btn: {
    color: 'var(--white)',
    border: '1px solid var(--white)'
  },
  content: {
    padding: theme.spacing(2),
    maxWidth: '850px',
    margin: '0 auto',
    fontSize: '14px',
    lineHeight: '28px',
    fontFamily: 'inherit',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    }
  }
}))

function VirtualClasses() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.container}>
        <Grid item md={7} sm={12} className={classes.text}>
          <Typography className={classes.content}>
            <Header variant="h4">FREE OUTDOOR CLASSES!</Header>
            Saturdays in July, we are offering <strong>free</strong> outdoor classes in Carol Pager Park located in Somerville, NJ. All ages welcome, open to the our community!
            <br/><br/>
            Click below to check out our complete schedule, and find out how you can still unleash your confidence. 
            <br/><br/>
            <Button className={classes.btn} variant="outlined">
              <Link className={classes.link} to="/schedule">
                Click for the outdoor schedule
              </Link>
            </Button>
          </Typography>
        </Grid>
        <Grid item md={5} sm={8} className={classes.imgItem}>
          <img className={classes.img} src={pole} alt="pole-dancer"></img>
        </Grid>
      </Grid>
    </Container>
  )
}

export default VirtualClasses;