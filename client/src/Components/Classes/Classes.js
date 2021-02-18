import React, {useState, useEffect} from 'react';
import Header from '../Header';
import {makeStyles} from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import {Container, Grid, Typography} from '@material-ui/core';
import ClassAccordion from './Accordion';
import {classArray} from '../../Data/classes';

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
        {classArray.map(classItem => {
          return (
            <ClassAccordion classItem={classItem} />
          )
        })}

      </Container>
    </Grow>
  )
}

export default Classes;
