import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Account from './components/Account/Account';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/login" component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;