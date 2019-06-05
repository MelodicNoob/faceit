import React, { Component } from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';

import ClassList from '../classes/ClassList';

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
    return (
      <MDBCard color='red'>
        <MDBCardHeader className='text-white'>
          <h3 className='float-left'>
            <i class='fal fa-chalkboard-teacher' /> Classes
          </h3>
          <div className='view-selectors float-right'>
            <i class='fas fa-list' />
            <i class='fas fa-th-large' />
          </div>
        </MDBCardHeader>
        <MDBCardBody>
          <ClassList classes={classes} />
        </MDBCardBody>
      </MDBCard>
    );
  }
}
