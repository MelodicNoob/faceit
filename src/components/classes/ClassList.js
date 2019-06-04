import React from 'react';

import { MDBRow } from 'mdbreact';

import ClassListItem from './ClassListItem';

const ClassList = props => {
  const { classes } = props;
  const classesList = classes.map(classes => (
    <ClassListItem key={classes.id} id={classes.id} name={classes.name} />
  ));
  return <MDBRow>{classesList}</MDBRow>;
};

export default ClassList;
