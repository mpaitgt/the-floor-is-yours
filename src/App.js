import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Schedule from './Components/Schedule/Schedule';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import {ScheduleProvider} from './Components/Providers/ScheduleProvider';

function App() {
  
  return (
    <Router basename="folder1">
      <ScheduleProvider>
      <Navbar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      <Footer />
      </ScheduleProvider>
    </Router>
  )
}

export default App;
