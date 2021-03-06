import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import { setCurrentUser, logoutUser } from './actions/authAction';


import Landingpages from './components/LandingPage/Landingpages';
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
import Trust from './components/Trust/Trust';
import Privacy from './components/Privacy/Privacy';
import Wrapper from './components/Layouts/Wrapper';
import PrivateRoute from './components/Common/PrivateRoute';
import Profile from './components/UserProfile/Profile';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/';
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Wrapper>
            <Route exact path="/" component={Landingpages} />
            <Route path="/About" component={About} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Event" component={Event} />
            <Route path="/Faq" component={Faq} />
            <Route path="/How" component={How} />
            <Route exact path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Why_Us" component={WhyUs} />
            <Route path="/What_we_do" component={Wedo} />
            <Route path="/trust_safety" component={Trust} />
            <PrivateRoute path="/user_profile" component={Profile} />
            <Route path="/privacy_policy" component={Privacy} />
          </Wrapper>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;