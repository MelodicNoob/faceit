import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Classes from './components/pages/Classes';
import Schedule from './components/pages/Schedule';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';

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
							<Route path='/classes' component={Classes} />
							<Route path='/schedule' component={Schedule} />
							<Route path='/profile' component={Profile} />
							<Route path='/settings' component={Settings} />
						</Switch>
					</div>
					<Footer />
				</>
			</Router>
		);
	}
}

export default App;
