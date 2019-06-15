import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core';

import { newTheme } from '../../context/ThemeContext';

export default function DashCard({ id, name, icon, color, changeTheme }) {
	return (
		<Card style={{ backgroundColor: `${color}` }} className={id}>
			<CardContent>
				<Typography variant='h5' component='h2' className='text-capitalize'>
					<NavLink onClick={changeTheme(newTheme(color))} to={`/${name}`}>
						<i className={`fas fa-${icon}`} /> {name}
					</NavLink>
				</Typography>
			</CardContent>
		</Card>
	);
}
