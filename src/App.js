import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Landingpage from './components/Landingpage/Landingpage';
import Banner from './Banner'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Landingpage} />
      </BrowserRouter>
    );
  }
}

export default App;