import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import ClassListItem from './ClassListItem';

const ClassList = ({ classes, view }) => {
	const classesList = classes.map(({ id, name }) => (
		<ClassListItem key={id} id={id} name={name} view={view} />
	));
	return (
		<Grid container spacing={2}>
			{classesList}
		</Grid>
	);
};

export default class Classes extends Component {
	render() {
		const classes = [
			{ id: 3102, name: 'Class 1' },
			{ id: 4183, name: 'Class 2' },
			{ id: 2009, name: 'Class 3' },
			{ id: 2103, name: 'Class 4' },
			{ id: 7782, name: 'Class 5' },
			{ id: 9298, name: 'Class 6' }
		];
		return <ClassList classes={classes} view='cards' />;
	}
}
