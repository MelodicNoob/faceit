import React from 'react';

import { MDBRow } from 'mdbreact';

import ClassListItem from './ClassListItem';

const ClassList = props => {
	const { classes, view } = props;
	const classesList = classes.map(c => (
		<ClassListItem key={c.id} id={c.id} name={c.name} view={view} />
	));
	return <MDBRow>{classesList}</MDBRow>;
};

export default ClassList;
