# The Floor is Yours Dance Studio

Local dance studio website. Built with React, Material UI, and Node.js/Express. Although the website doesn't necessarily _require_ reusable components and such, this project was a huge learning experience in building out a React app, React-Router, ES6 functions, and its relationship to the server side of things.

## __Most fun: Building the Accordion__

```
// mapping over classes
classArray.map(classItem => {
  return (
    <ClassAccordion classItem={classItem} />
  )
});

// rendered class accordion
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
          // my code
        </CustomAccordionSummary>
        <AccordionDetails>
          // my code
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
```

## Most challenging: Server configuration and client build

Technologies used: 
__React, Material UI, Node.js/Express, Nodemailer__

[Check out the live site at https://tfiy.herokuapp.com](https://www.tfiy.herokuapp.com/)

---

_Built by Matt Pignatore_