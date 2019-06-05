import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationLink extends Component {
	render() {
		const { isDash } = this.props;
		const { id, name, linkColor } = this.props.link;
		return (
			<li key={id}>
				{isDash ? (
					<NavLink to={`/${name}`} style={{ background: `${linkColor}` }}>
						{name}
					</NavLink>
				) : (
					<NavLink to={`/${name}`}>{name}</NavLink>
				)}
			</li>
		);
	}
}
