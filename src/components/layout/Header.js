import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import MobileLogo from '../../assets/MobileLogo';

export const Header = withRouter(props => <HeaderComponent {...props} />);

class HeaderComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDash: this.props.location.pathname === '/dashboard'
		};
	}
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.location.pathname !== prevState.isDash) {
			return { isDash: nextProps.location.pathname === '/dashboard' };
		} else return null;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.location.pathname !== this.props.location.pathname) {
			this.setState({ isDash: false });
		}
	}

	render() {
		const { isDash } = this.state;
		return (
			<header>
				<MobileLogo />
				<div className='header-buttons'>
					<NavLink to='/dashboard'>
						<i className='fal fa-home' />
					</NavLink>
					<NavLink to='/'>
						<i className='fal fa-power-off' aria-hidden='true' />
					</NavLink>
				</div>
				<Navigation isDash={isDash} />
			</header>
		);
	}
}
