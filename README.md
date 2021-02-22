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

## __Most challenging: Server configuration and client build__

When I learned React, all I _really_ had to learn was __create-react-app__. But, an extensive dive under the hood taught me everything that was happening from Babel to Webpack/React-Scripts.

Understanding this helped me understand the build, and understanding _that_ lent a hand in helping me grasp React's relationship to the server-side.



---

### [Check out the live site at https://tfiy.herokuapp.com 💃](https://www.tfiy.herokuapp.com/)

---
\
_Built by Matt Pignatore_

Technologies used: 
__React, Material UI, Node.js/Express, Nodemailer__