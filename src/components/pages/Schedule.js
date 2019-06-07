import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export default class Schedule extends Component {
	render() {
		return (
			<Grid container spacing={4}>
				<Grid item xs={12} md={8}>
					<Typography variant='body1'>Calendar</Typography>
				</Grid>
			</Grid>
		);
	}
}
