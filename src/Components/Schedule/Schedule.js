import React, {useState, useEffect, useContext} from 'react';
import Header from '../Header';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import {Container, Grid, Typography, List, ListItem, Button} from '@material-ui/core';
// import {ScheduleContext} from '../Providers/ScheduleProvider';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: theme.spacing(10),
  },
  class: {
    maxWidth: '500px',
    border: '1px solid white',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderRadius: '5px',
    background: '#ffffff1f'
  },
  link: {
    color: 'white',
    border: '1px solid white'
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
  item: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: 'center'
  },
  anchor: {
    color: 'var(--maroon)',
    padding: theme.spacing(0.5),
    background: 'white',
    borderRadius: '5px',
    fontWeight: '700'
  }
}))

function Schedule() {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setChecked(prev => !prev)
    window.scrollTo(0, 0)
  }, [])

  return (
    <Grow in={checked}>
      <Container className={classes.root}>
        <Header variant="h2">Class Schedule</Header>
        <Typography variant="body1" className={classes.paragraph}>
          Class schedules coming soon...
          <br/><br/>
          <Typography variant="body1" className={classes.paragraph}>You can find a full schedule of available classes at <a href="https://www.vagaro.com/thefloorisyoursdancecenter/classes" target="_blank" className={classes.anchor}>Vagaro</a>.
          <br/><br/>
          Please also visit our <a href="https://linktr.ee/thefloorisyoursdancecenter" target="_blank" className={classes.anchor}>Linktree</a> for other information regarding Unlimited Memberships, Class Packs, and more!</Typography>
        </Typography>
      </Container>
    </Grow>
  )
}

export default Schedule;