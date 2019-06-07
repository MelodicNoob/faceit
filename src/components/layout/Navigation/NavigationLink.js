import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationLink extends Component {
	render() {
		const { isDash } = this.props;
		const { name, linkColor, icon } = this.props.link;
		return (
			<li>
				{isDash ? (
					<NavLink to={`/${name}`} style={{ background: `${linkColor}` }}>
						<i className={`fa fa-${icon}`} /> {name}
					</NavLink>
				) : (
					<NavLink to={`/${name}`}>
						<i className={`fa fa-${icon}`} /> {name}
					</NavLink>
				)}
			</li>
		);
	}
}
