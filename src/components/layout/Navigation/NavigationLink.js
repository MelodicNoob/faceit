import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { newTheme } from '../../../context/ThemeContext';

export default class NavigationLink extends Component {
	render() {
		const { isDash, changeTheme } = this.props;
		const { name, color, icon } = this.props.link;
		return (
			<li>
				{isDash ? (
					<NavLink
						onClick={changeTheme(newTheme(color))}
						to={`/${name}`}
						style={{ background: `${color}` }}
					>
						<i className={`fa fa-${icon}`} /> {name}
						<span style={{ color: color }}>{name}</span>
					</NavLink>
				) : (
					<NavLink onClick={changeTheme(newTheme(color))} to={`/${name}`}>
						<i className={`fa fa-${icon}`} /> {name}
						<span>{name}</span>
					</NavLink>
				)}
			</li>
		);
	}
}
