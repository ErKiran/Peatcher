import React, { Component } from 'react';
import Homepage from './components/Homepage/Homepage';
import { Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
      </BrowserRouter>
    );
  }
}

export default App;