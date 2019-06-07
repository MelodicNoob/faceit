import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { Header, Footer } from './components/layout/HeaderFooter';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Classes from './components/pages/Classes';
import Schedule from './components/pages/Schedule';
import { Profile } from './components/pages/Profile';
import { Settings } from './components/pages/Settings';
import Page from './components/pages/Page';

const colors = {
	red: '#FF0000',
	purple: '#453192',
	orange: '#fbb03b',
	blue: '#29abe2'
};

const mainTheme = createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			main: colors.red
		},
		secondary: {
			main: colors.purple
		}
	}
});

class App extends Component {
	render() {
		return (
			<Router>
				<ThemeProvider theme={mainTheme}>
					<Box className='app-container'>
						<Header />
						<Switch>
							<Route exact path='/' component={Login} />
							<Route
								path='/dashboard'
								render={() => <Dashboard colors={colors} />}
							/>
							<Route
								path='/classes'
								render={props => (
									<Page
										{...props}
										title='Classes'
										icon='chalkboard-teacher'
										color={colors.red}
										theme='light'
									>
										<Classes />
									</Page>
								)}
							/>
							<Route
								path='/schedule'
								render={() => (
									<Page
										title='Schedule'
										icon='clock'
										color={colors.purple}
										theme='dark'
									>
										<Schedule />
									</Page>
								)}
							/>
							<Route
								path='/profile'
								render={() => (
									<Page
										title='Profile'
										icon='user'
										color={colors.orange}
										theme='dark'
									>
										<Profile />
									</Page>
								)}
							/>
							<Route
								path='/settings'
								render={() => (
									<Page
										title='Settings'
										icon='cog'
										color={colors.blue}
										theme='light'
									>
										<Settings />
									</Page>
								)}
							/>
						</Switch>
					</Box>
					<Footer />
				</ThemeProvider>
			</Router>
		);
	}
}

export default App;
