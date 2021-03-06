import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import CovidLetter from './Components/CovidLetter';
import About from './Components/About/About';
import Schedule from './Components/Schedule/Schedule';
import Classes from './Components/Classes/Classes';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import NotFoundPage from './Components/NotFound/NotFoundPage';
import {Container} from '@material-ui/core';

function App() {
  
  return (
    <Router basename="/">
      <Navbar />
        <Switch>
          <Route exact path="/covid-letter" component={CovidLetter} />
          <Route exact path="/about" component={About} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
          <Route component={NotFoundPage} />
        </Switch>
      <Footer />
    </Router>
  )
}

export default App;
