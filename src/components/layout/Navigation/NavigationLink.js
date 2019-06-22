import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../../../context/ThemeContext';

const NavigationLink = ({ isDash, link }) => {
	const { name, color, icon } = link;
	const { changeTheme } = useContext(ThemeContext);
	return (
		<li>
			{isDash ? (
				<NavLink
					onClick={() => changeTheme(color)}
					to={`/${name}`}
					style={{ background: `${color}` }}
				>
					<i className={`fa fa-${icon}`} /> {name}
					<span style={{ color: color }}>{name}</span>
				</NavLink>
			) : (
				<NavLink onClick={() => changeTheme(color)} to={`/${name}`}>
					<i className={`fa fa-${icon}`} /> {name}
					<span>{name}</span>
				</NavLink>
			)}
		</li>
	);
};

export default NavigationLink;
