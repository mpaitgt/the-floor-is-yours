import React, {useState, useEffect, useContext} from 'react';
import Header from '../Header';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import {Container, Grid, Typography, List, ListItem, Box, Button} from '@material-ui/core';
import {ScheduleContext} from '../Providers/ScheduleProvider';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '1000px',
    margin: '0 auto',
    marginTop: theme.spacing(10),
  },
  class: {
    maxWidth: '500px',
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
  link: {
    color: 'white',
    border: '1px solid white'
  },
  paragraph: {
    marginTop: theme.spacing(3),
    fontSize: '16px',
    fontFamily: 'inherit',
    lineHeight: '24px'
  }
}))

function Schedule() {
  const [checked, setChecked] = useState(false);
  const [schedule] = useContext(ScheduleContext);
  const classes = useStyles();

  useEffect(() => {
    setChecked(prev => !prev)
    window.scrollTo(0, 0)
  }, [])

  const classesByType = () => {
    return Object.entries(
      schedule.reduce((classDay, classes) => {

        const { class_day } = classes;
        classDay[class_day] = classDay[class_day] 
        ? [...classDay[class_day], classes]
        : [classes]
        return classDay
      }, {})
    )
  }

  return ( 
    <Grow in={checked}>
      <Container className={classes.root}>
        <Header variant="h2">Virtual Class Schedule</Header>
          {classesByType().map(classItem => {
            return (
              <List>
                <Header variant="h4">{classItem[0]}</Header>
                  {classItem[1].map(item => {
                    return (
                      <ListItem divider={true} style={{width: '100%', margin: '0 auto', borderBottom: '1px solid var(--lightblue)' }}>
                        <Box style={{width: '100%', margin: '0 auto' }} display="flex" alignItems="center" justifyContent="space-evenly"  flexDirection="row" flexWrap="wrap">
                          <Box style={{width: '25%' }} p={2}><strong>{item.class_type}</strong></Box>
                          <Box style={{width: '25%' }} p={2}>{item.class_time}</Box>
                          <Box style={{width: '20%' }} p={2}>with {item.instructor}</Box>
                          <Box style={{ style: '30S%' }} p={2}>
                            <a href="https://linktr.ee/thefloorisyoursdancecenter" target="_blank" rel="noreferrer noopener">
                              <Button className={classes.link} variant="outlined">Go to Class</Button>
                            </a>
                          </Box>
                        </Box>
                      </ListItem>
                    )
                  })}
              </List>
            )
          })}
      </Container>
    </Grow>
  )
}

export default Schedule;