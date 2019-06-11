import React from 'react';
import { NavLink } from 'react-router-dom';

import { useTheme } from '@material-ui/styles';

const NavigationLink = ({ isDash, link }) => {
	const { name, linkColor, icon } = link;
	const theme = useTheme();

	const changeTheme = color => console.log(color);

	return (
		<li>
			{isDash ? (
				<NavLink
					onClick={changeTheme(theme.palette.primary.main)}
					to={`/${name}`}
					style={{ background: `${linkColor}` }}
				>
					<i className={`fa fa-${icon}`} /> {name}
				</NavLink>
			) : (
				<NavLink
					onClick={changeTheme(theme.palette.primary.main)}
					to={`/${name}`}
				>
					<i className={`fa fa-${icon}`} /> {name}
				</NavLink>
			)}
		</li>
	);
};

export default NavigationLink;
