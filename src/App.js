import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { pages } from './data/pages';

import { Header, Footer } from './components/layout/HeaderFooter';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Classes from './components/pages/panels/Classes';
import Schedule from './components/pages/panels/Schedule';
import Profile from './components/pages/panels/Profile';
import Upload from './components/pages/panels/Upload';
import Page from './components/pages/Page';

const theme = createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			main: pages[0].color
		}
	}
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme
		};
	}
	render() {
		return (
			<Router>
				<ThemeProvider theme={theme}>
					<Box className='app-container'>
						<Header changeTheme={() => this.changeTheme} />
						<Switch>
							<Route exact path='/' component={Login} />
							<Route
								path='/dashboard'
								render={() => (
									<Dashboard
										changeTheme={() => this.changeTheme}
										pages={pages}
									/>
								)}
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
												) : name === 'add' ? (
													<Upload />
												) : name === 'profile' ? (
													<Profile />
												) : name === 'schedule' ? (
													<Schedule />
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
