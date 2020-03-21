import React, {useState, useEffect, useContext} from 'react';
import Header from '../Header';
import {makeStyles} from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import {Container, Grid, Typography, Box} from '@material-ui/core';
import {ScheduleContext} from '../Providers/ScheduleProvider';

const useStyles = makeStyles(theme => ({
  schedule: {
    marginTop: '100px'
  },
  class: {
    maxWidth: '500px',
    margin: '0 auto',
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
  }, [])

  const classesByDay = () => {
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

  const sorter = {
    'Sunday': 0,
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6
  }

  const sortDays = () => {
    return classesByDay().sort((a, b) => {
      let day1 = a[0];
      let day2 = b[0];
      return sorter[day1] - sorter[day2]
    })
  }
  console.log(sortDays());

  // const fullSchedule = 

  return ( 
    <Grow in={checked}>
      <Container>
        <Box>
          <Header className={classes.schedule}>
            Schedule  
          </Header>
          <Grid container>
            <Grid item md={3} />
            <Grid item md={6} sm={12} xs={12}>
            {/* <ul>
            {sortDays().map(classItem => {
              return (
                <div>
                  <h1 style={{ paddingTop: '20px' }}>{classItem[0]}</h1>
                  <ScheduleTable classItems={classItem[1]}/>
                </div>
              )
            })}
            </ul> */}
            <Typography clasName={classes.paragraph}>
              Class schedules TBD
            </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grow>
  )
}

export default Schedule;