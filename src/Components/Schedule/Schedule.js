import React, {useState, useEffect, useContext} from 'react';
import Header from '../Header';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import {Container, Grid, Typography, List, ListItem, Button} from '@material-ui/core';
import {ScheduleContext} from '../Providers/ScheduleProvider';

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
        <Grid container>
          <Grid item lg={7} xs={12}>
            <Header variant="h2">Virtual Class Schedule</Header>
              {classesByType().map(classItem => {
                return (
                  <List>
                    <Header variant="h4">{classItem[0]}</Header>
                      {classItem[1].map(item => {
                        return (
                          <ListItem divider={true} style={{ borderBottom: '1px solid var(--lightblue)' }}>
                            <Grid container alignItems="center" justify="center">
                              <Grid item lg={3} md={3} sm={3} xs={12} className={classes.item}><strong>{item.class_type}</strong></Grid>
                              <Grid item lg={3} md={3} sm={3} xs={12} className={classes.item}>with {item.instructor}</Grid>
                              <Grid item lg={3} md={3} sm={3} xs={12} className={classes.item}>{item.class_time}</Grid>
                              <Grid item lg={3} md={3} sm={3} xs={12} className={classes.item}>
                                <a href="https://linktr.ee/thefloorisyoursdancecenter" target="_blank" rel="noreferrer noopener">
                                  <Button className={classes.link} variant="outlined">Go to Class</Button>
                                </a>
                              </Grid>
                            </Grid>
                          </ListItem>
                        )
                      })}
                  </List>
                )
              })}
            </Grid>
            <Grid item lg={1}>
              
            </Grid>
            <Grid item lg={4} xs={12}>
              <div style={{marginTop: '6rem'}}>
              <Header variant="h4">
                FREE Outdoor Classes
              </Header>
              <Typography variant="body1" className={classes.paragraph}>
              Saturdays in July, we are offering <strong>free</strong> outdoor classes in Carol Pager Park located in Somerville, NJ. All ages welcome, open to the our community!
              </Typography>
              <List>
                <ListItem className={classes.item} divider={false} style={{fontSize: '20px'}}>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={6} className={classes.item}><strong>Pilates</strong></Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6} className={classes.item}>8:00am</Grid>
                  </Grid>
                </ListItem>
                <ListItem className={classes.item} divider={false} style={{fontSize: '20px'}}>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={6} className={classes.item}><strong>Zumba</strong></Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6} className={classes.item}>9:00am</Grid>
                  </Grid>
                </ListItem>
                <ListItem className={classes.item} divider={false} style={{fontSize: '20px'}}>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={6} className={classes.item}><strong>Yoga</strong></Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6} className={classes.item}>10:00am</Grid>
                  </Grid>
                </ListItem>
              </List>
              </div>
            </Grid>
          </Grid>
      </Container>
    </Grow>
  )
}

export default Schedule;