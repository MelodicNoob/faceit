import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core';
import Classes from './panels/Classes';
import Upload from './panels/Upload';
import Profile from './panels/Profile';
import Schedule from './panels/Schedule';

export default function DashCard({ id, name, icon, color }) {
	return (
		<Card style={{ backgroundColor: `${color}` }} className={id}>
			<CardContent>
				<Typography variant='h5' component='h2' className='text-capitalize'>
					<NavLink to={`/${name}`}>
						<i className={`fas fa-${icon}`} /> {name}
					</NavLink>
				</Typography>

				{name === 'classes' ? (
					<Classes dash />
				) : name === 'add' ? (
					<Upload dash />
				) : name === 'profile' ? (
					<Profile dash />
				) : name === 'schedule' ? (
					<Schedule dash />
				) : null}
			</CardContent>
		</Card>
	);
}
