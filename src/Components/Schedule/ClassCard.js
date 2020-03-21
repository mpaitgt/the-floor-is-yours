import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Slide from '@material-ui/core/Slide';
import {List, ListItem, ListItemText, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '520px',
    marginBottom: '20px'
  },
  media: {
    height: 300,
    zIndex: '-99'
  },
  header: {
    fontSize: '28px',
    fontFamily: 'Permanent Marker, cursive',
    textAlign: 'center',
    width: '100%',
    background: 'linear-gradient(30deg, #a9b0c0 , #5a2a40)',
    color: '#f2f2f2'
  },
  content: {
    background: 'linear-gradient(30deg, #a9b0c0, #f2f2f2);'
  },
  grow: {
    background: '#f1f1f1f4',
    height: 'auto',
    textAlign: 'center',
    padding: theme.spacing(2),
    zIndex: '-99',
    fontFamily: 'Nanum Gothic, sans-serif',
    // height: '100%'
  },
  list: {
    // overflowY: 'scroll'
  },
  times: {
    fontSize: '20px',
    fontFamily: 'Nanum Gothic, sans-serif'
  },
  details: {
    fontSize: '12px',
    marginLeft: theme.spacing(2),
    fontFamily: 'Nanum Gothic, sans-serif'
  }
}));

export default function ClassCard(props) {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  const displaySchedule = () => {
    setChecked(prev => !prev)
  }

  useEffect(() => {
    console.log('hello');
  }, [])
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
        className={classes.media}
        image={props.image}
        title={props.category}
        >
        <Slide direction="up" in={checked} className={classes.grow}>
          <Box>
            <Typography variant="h4" className={classes.times}>
              Class Times
            </Typography>
            <List className={classes.list}>
            {props.classeDetails.map(item => {
              return (
                <ListItem alignItems="center"  style={{ fontFamily: 'Nanum Gothic, sans-serif'}} divider>
                  <ListItemText style={{ fontFamily: 'Nanum Gothic, sans-serif' }}>
                    {item.class_day} at {item.class_time}
                    <Typography className={classes.details} variant="caption">
                    {item.class_details
                    ?
                    item.class_details
                    :
                    null}
                    </Typography>
                  </ListItemText>
                </ListItem>
              )
            })}
            </List>
          </Box>
        </Slide> 
        </CardMedia>
        <CardContent
        onClick={displaySchedule}
        className={classes.header}
        >
        {props.category}
        </CardContent>

              
          
      </CardActionArea>
    </Card>
  )
}