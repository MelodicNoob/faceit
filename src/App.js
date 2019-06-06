import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Footer } from './components/layout/HeaderFooter';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Classes from './components/pages/Classes';
import Schedule from './components/pages/Schedule';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import Page from './components/pages/Page';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className='app-container'>
            <Header />
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/dashboard' component={Dashboard} />
              <Route
                path='/classes'
                render={() => (
                  <Page title='Classes' icon='chalkboard-teacher' color='red'>
                    <Classes />
                  </Page>
                )}
              />
              <Route
                path='/schedule'
                render={() => (
                  <Page title='Schedule' icon='clock' color='purple'>
                    <Schedule />
                  </Page>
                )}
              />
              <Route
                path='/profile'
                render={() => (
                  <Page title='Profile' icon='user' color='orange'>
                    <Profile />
                  </Page>
                )}
              />
              <Route
                path='/settings'
                render={() => (
                  <Page title='Settings' icon='cog' color='blue'>
                    <Settings />
                  </Page>
                )}
              />
            </Switch>
          </div>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
