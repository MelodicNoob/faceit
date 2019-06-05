import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import MobileLogo from '../../assets/MobileLogo';

const links = [
	{ id: 1, name: 'classes', linkColor: '#ff0000' },
	{ id: 2, name: 'schedule', linkColor: '#453192' },
	{ id: 3, name: 'profile', linkColor: '#fbb03b' },
	{ id: 4, name: 'settings', linkColor: '#29abe2' }
];

export const Header = withRouter(props => <HFComponent {...props} header />);
export const Footer = withRouter(props => <HFComponent {...props} />);

class HFComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDash: this.props.location.pathname === '/dashboard',
			path: this.props.location.pathname,
			activeColor: links[0].linkColor
		};
	}
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.location.pathname !== prevState.path) {
			return {
				isDash: nextProps.location.pathname === '/dashboard',
				path: nextProps.location.pathname,
				activeColor: links[0].linkColor
			};
		} else if (nextProps.location.pathname === `/${links[1].name}`) {
			return {
				activeColor: links[1].linkColor
			};
		} else if (nextProps.location.pathname === `/${links[2].name}`) {
			return {
				activeColor: links[2].linkColor
			};
		} else if (nextProps.location.pathname === `/${links[3].name}`) {
			return {
				activeColor: links[3].linkColor
			};
		} else
			return {
				isDash: nextProps.location.pathname === '/dashboard',
				activeColor: links[0].linkColor
			};
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.location.pathname !== this.props.location.pathname) {
			this.setState({
				isDash: null
			});
		}
	}

	render() {
		const { isDash, activeColor } = this.state;
		const { header } = this.props;
		return (
			<>
				{header ? (
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
						<Navigation links={links} isDash={isDash} />
					</header>
				) : (
					<footer className='my-4'>
						<NavLink to='/'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 20'>
								<g fill={activeColor}>
									<path d='M28.162 18.855h-5.304c0-.269.063-1.03.189-2.288h-.051c-1.274 1.735-2.706 2.602-4.299 2.602-1.265 0-2.244-.44-2.935-1.32-.691-.88-1.037-2.115-1.037-3.708 0-1.14.22-2.263.659-3.369.439-1.106 1.047-2.028 1.822-2.765.775-.737 1.727-1.311 2.854-1.722 1.127-.411 2.428-.616 3.903-.616 2.019 0 4.139.26 6.359.78L28.65 14.33c-.134.595-.25 1.349-.346 2.263-.093.913-.142 1.667-.142 2.262zm-3.733-9.703a3.205 3.205 0 0 0-.767-.075c-.67 0-1.274.193-1.81.578s-.97.964-1.301 1.735a5.82 5.82 0 0 0-.496 2.312c0 .502.109.886.327 1.15.218.264.486.396.805.396.604 0 1.144-.341 1.621-1.024s.854-1.661 1.131-2.935l.49-2.137zM40.715 10.132c-.553-.36-1.29-.54-2.212-.54-.972 0-1.795.348-2.47 1.043-.674.695-1.011 1.555-1.011 2.577 0 1.358.712 2.036 2.136 2.036.402 0 .85-.06 1.345-.182a5.392 5.392 0 0 0 1.333-.509l-.742 3.657a7.902 7.902 0 0 1-1.979.716 9.542 9.542 0 0 1-2.068.239c-1.668 0-2.977-.471-3.928-1.414s-1.426-2.24-1.426-3.89c0-1.5.362-2.882 1.087-4.148a7.763 7.763 0 0 1 3.023-2.973c1.29-.716 2.744-1.074 4.361-1.074 1.375 0 2.513.226 3.418.678l-.867 3.784zM54.04 9.516c0 1.475-.676 2.572-2.03 3.293-1.354.721-3.437 1.123-6.253 1.206v.1c0 .486.205.865.616 1.138s.96.409 1.646.409c.612 0 1.347-.104 2.206-.314.859-.21 1.564-.457 2.118-.742l-.742 3.507c-.654.31-1.447.564-2.382.761-.934.197-1.867.295-2.797.295-1.801 0-3.218-.477-4.248-1.433-1.031-.955-1.546-2.263-1.546-3.922 0-1.508.354-2.899 1.062-4.173.708-1.274 1.684-2.254 2.928-2.941 1.244-.687 2.679-1.031 4.305-1.031 1.625 0 2.884.331 3.778.993.893.663 1.339 1.615 1.339 2.854zm-4.939-.025c0-.184-.057-.352-.17-.502s-.312-.226-.597-.226c-.561 0-1.045.214-1.452.642-.407.428-.681 1.03-.824 1.81.947 0 1.691-.142 2.231-.428.541-.286.812-.717.812-1.296zM58.748 18.855h-5.43L57.126.831h5.43l-3.808 18.024zM77.884 5.08h-5.103l-2.903 13.775h-5.455L67.327 5.08h-5.041l.892-4.248h15.598l-.892 4.248zM10.469 5.08l-.666 3.242h5.354l-.929 4.248H8.872l-1.307 6.285H2.137l1.327-6.285h-2.24l.93-4.248h2.209L5.945.831h11.299l-.905 4.249z' />
								</g>
							</svg>
						</NavLink>
					</footer>
				)}
			</>
		);
	}
}
