import React, {useState, useEffect, useContext} from 'react';
import Header from '../Header';
import {makeStyles} from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import {Container, Grid} from '@material-ui/core';
import ClassCard from './ClassCard';
import {ScheduleContext} from '../Providers/ScheduleProvider';

const useStyles = makeStyles(theme => ({
  root: {
    // marginTop: '150px'
  }
}))

function Schedule() {
  const [checked, setChecked] = useState(false);
  const [schedule] = useContext(ScheduleContext);
  const classes = useStyles();

  useEffect(() => {
    setChecked(prev => !prev)
  }, [])

  const classesByType = () => {
    return Object.entries(
      schedule.reduce((classType, classes) => {
        const { class_type } = classes;
        classType[class_type] = classType[class_type] 
        ? [...classType[class_type], classes]
        : [classes]
        return classType
      }, {})
    )
  }

  return ( 
    <Grow in={checked}>
      <Container className={classes.root}>
        <Header>
          Classes
          <span style={{ fontSize: '18px', marginLeft: '4em' }}>Click to view class times</span>
        </Header>
        <Grid container>
          {classesByType().map(classItem => {
            return (
              <Grid item md={6} sm={12} xs={12}>
                <ClassCard 
                category={classItem[0]} 
                image={classItem[1][0].image}
                classeDetails={classItem[1]}
                key={classItem.id}/>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Grow>
  )
}

export default Schedule;

// <Grid item sm={4}>
//  <ClassCard item={classItem}/>
// </Grid>
