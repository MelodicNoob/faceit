import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';

const newTheme = main =>
	createMuiTheme({
		palette: {
			primary: {
				main
			}
		}
	});

export default class NavigationLink extends Component {
	render() {
		const { isDash, changeTheme } = this.props;
		const { name, linkColor, icon } = this.props.link;
		return (
			<li>
				{isDash ? (
					<NavLink
						onClick={() => changeTheme(newTheme(linkColor))}
						to={`/${name}`}
						style={{ background: `${linkColor}` }}
					>
						<i className={`fa fa-${icon}`} /> {name}
					</NavLink>
				) : (
					<NavLink
						onClick={() => changeTheme(newTheme(linkColor))}
						to={`/${name}`}
					>
						<i className={`fa fa-${icon}`} /> {name}
					</NavLink>
				)}
			</li>
		);
	}
}
