import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Dashboard extends Component {
	render() {
		const { colors } = this.props;
		const { red, purple, orange, blue } = colors;
		return (
			<div className='dashboard'>
				<Card style={{ backgroundColor: `${red}` }} className='d1'>
					<CardContent>
						<Typography variant='h5' component='h2'>
							<NavLink to='/classes'>
								<i className='fas fa-chalkboard-teacher' /> Classes
							</NavLink>
						</Typography>
					</CardContent>
				</Card>
				<Card style={{ backgroundColor: `${purple}` }} className='d2'>
					<CardContent>
						<Typography variant='h5' component='h2'>
							<NavLink to='/schedule'>
								<i className='fas fa-clock' /> Schedule
							</NavLink>
						</Typography>
					</CardContent>
				</Card>
				<Card style={{ backgroundColor: `${blue}` }} className='d3'>
					<CardContent>
						<Typography variant='h5' component='h2'>
							<NavLink to='/settings'>
								<i className='fas fa-cog' /> Settings
							</NavLink>
						</Typography>
					</CardContent>
				</Card>
				<Card style={{ backgroundColor: `${orange}` }} className='d4'>
					<CardContent>
						<Typography variant='h5' component='h2'>
							<NavLink to='/profile'>
								<i className='fas fa-user' /> Profile
							</NavLink>
						</Typography>
					</CardContent>
				</Card>
			</div>
		);
	}
}
