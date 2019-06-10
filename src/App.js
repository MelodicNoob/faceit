import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { Header, Footer } from './components/layout/HeaderFooter';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Classes from './components/pages/panels/Classes';
import Schedule from './components/pages/panels/Schedule';
import Profile from './components/pages/panels/Profile';
import Settings from './components/pages/panels/Settings';
import Page from './components/pages/Page';

const colors = {
  red: '#FF0000',
  purple: '#453192',
  orange: '#fbb03b',
  blue: '#29abe2'
};

const { red, purple, orange, blue } = colors;

const pages = [
  {
    name: 'classes',
    icon: 'chalkboard-teacher',
    viewToggle: true,
    color: red
  },
  {
    name: 'schedule',
    icon: 'clock',
    viewToggle: false,
    color: purple
  },
  {
    name: 'profile',
    icon: 'user',
    viewToggle: false,
    color: orange
  },
  {
    name: 'settings',
    icon: 'cog',
    viewToggle: false,
    color: blue
  }
];

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: red
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.changeTheme = theme => {
      this.setState({ theme });
    };

    this.state = {
      theme
    };
  }
  render() {
    const { theme } = this.state;
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Box className='app-container'>
            <Header changeTheme={this.changeTheme} />
            <Switch>
              <Route exact path='/' component={Login} />
              <Route
                path='/dashboard'
                render={() => <Dashboard colors={colors} />}
              />
              {pages.map(function({ name, icon, viewToggle }, i) {
                return (
                  <Route
                    key={i}
                    path={`/${name}`}
                    render={() => (
                      <Page
                        title={name}
                        icon={icon}
                        color={theme.palette.primary.main}
                        viewToggle={viewToggle}
                      >
                        {name === 'classes' ? (
                          <Classes />
                        ) : name === 'schedule' ? (
                          <Schedule />
                        ) : name === 'profile' ? (
                          <Profile />
                        ) : name === 'settings' ? (
                          <Settings />
                        ) : null}
                      </Page>
                    )}
                  />
                );
              })}
            </Switch>
          </Box>
          <Footer />
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
