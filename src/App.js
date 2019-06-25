import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Landingpage from './components/Landingpage/Landingpage';
import About from './components/Aboutus.js/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Event from './components/Event/Event';
import Faq from './components/FAQ/Faq';
import How from './components/HowitWorks/How';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import WhyUs from './components/WhyUS/Whyus';
import Wedo from './components/WhatWeDo/Wedo';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Landingpage} />
        <Route path="/About" component={About} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Event" component={Event} />
        <Route path="/Faq" component={Faq} />
        <Route path="/How" component={How} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Why_Us" component={WhyUs} />
        <Route path="/What_we_do" component={Wedo} />
      </BrowserRouter>
    );
  }
}

export default App;