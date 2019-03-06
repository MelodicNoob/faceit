import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />

          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
