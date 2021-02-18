import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import {Grid, Typography, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CustomAccordionSummary = withStyles({
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'auto',
    margin: '0'
  }
})(AccordionSummary);

const useStyles = makeStyles((theme) => ({
  accordion: {
    background: 'transparent',
    boxShadow: 'none',
    margin: '1rem auto',
  },
  headline: {
    fontWeight: '900',
    fontSize: '36px',
    color: 'var(--white)',
    position: 'relative',
    flexGrow: '1',
    [theme.breakpoints.down('xs')]: {
      fontSize: '24px',
    },
  },
  arrow: {
    fontSize: '20px',
    transform: 'rotate(180deg)',
  },
  instructor: {
    display: 'inline-block',
    fontFamily: 'Permanent Marker, cursive',
    fontSize: '34px',
    fontWeight: '100',
    color: 'var(--lightblue)',
    paddingLeft: '10px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '24px',
    },
  },
  paragraph: {
    fontFamily: 'inherit',
    fontSize: '18px',
    lineHeight: '32px',
    color: 'var(--white)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  image: {
    display: 'inline-block',
    borderRadius: '40% 50% 40% 60%',
    boxShadow: '0px 0px 6px 4px rgba(0,0,0,0.1)'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  iframe: {
    width: '560px',
    height: '349px',
    // marginRight: theme.spacing(4),
    // [theme.breakpoints.down('sm')]: {
    //   marginBottom: '10px',
    // },
  }
}))

const ClassAccordion = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Accordion
        expandIcon={<ExpandMoreIcon />}
        aria-controls="class/instructor content"
        className={classes.accordion}
      >
        <CustomAccordionSummary>
          <div className={classes.headline}>
            <p>
            {props.classItem.type} 
            <span className={classes.instructor}>
              with {props.classItem.instructor}
            </span>
            </p>
          </div>
          <div>
            <img
              className={classes.image}
              width="100"
              src={props.classItem.image} 
              alt={`${props.classItem.type} with ${props.classItem.instructor}`}
            />
          </div>
        </CustomAccordionSummary>
        <AccordionDetails>
              <div className={classes.details}>
                
                <iframe 
                  width="560" height="349"
                  src={props.classItem.iframeURL}
                  className={classes.iframe}
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
               
                <Typography variant="body1" className={classes.paragraph}>
                  {props.classItem.description}
                </Typography>
              </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default ClassAccordion;

{/* <img 
  className={classes.secondaryImage}
  src={props.classItem.secondary_image}
  alt={props.classItem.instructor}
  width="180"
/> */}