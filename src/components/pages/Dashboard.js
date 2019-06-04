import React, { Component } from 'react';
import { MDBCard, MDBCardHeader } from 'mdbreact';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <MDBCard color='red' text='white' className='d1'>
          <MDBCardHeader>
            <i class='fas fa-chalkboard-teacher' /> Classes
          </MDBCardHeader>
        </MDBCard>
        <MDBCard color='purple' text='white' className='d2'>
          <MDBCardHeader>
            <i class='fas fa-clock' /> Schedule
          </MDBCardHeader>
        </MDBCard>
        <MDBCard color='blue' text='white' className='d3'>
          <MDBCardHeader>
            <i class='fas fa-cog' /> Settings
          </MDBCardHeader>
        </MDBCard>
        <MDBCard color='orange' text='white' className='d4'>
          <MDBCardHeader>
            <i class='fas fa-user' /> Profile
          </MDBCardHeader>
        </MDBCard>
      </div>
    );
  }
}
