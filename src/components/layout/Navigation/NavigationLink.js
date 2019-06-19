import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ isDash, link }) => {
	const { name, color, icon } = link;

	return (
		<li>
			{isDash ? (
				<NavLink to={`/${name}`} style={{ background: `${color}` }}>
					<i className={`fa fa-${icon}`} /> {name}
					<span style={{ color: color }}>{name}</span>
				</NavLink>
			) : (
				<NavLink to={`/${name}`}>
					<i className={`fa fa-${icon}`} /> {name}
					<span>{name}</span>
				</NavLink>
			)}
		</li>
	);
};

export default NavigationLink;
