import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Landingpage from './components/Landingpage/Landingpage';
import About from './components/Aboutus.js/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Event from './components/Event/Event';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Landingpage} />
        <Route path="/About" component={About} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Event" component={Event} />
      </BrowserRouter>
    );
  }
}

export default App;