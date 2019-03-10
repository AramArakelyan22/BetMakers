import React, { Component } from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom'

import Login from './views/Login';
import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch >
          <Route path='/' exact component={Login}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
