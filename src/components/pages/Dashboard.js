import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBCard, MDBCardHeader } from 'mdbreact';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <MDBCard color='red' text='white' className='d1'>
          <MDBCardHeader>
            <NavLink to='/classes' className='text-white'>
              <i class='fas fa-chalkboard-teacher' /> Classes
            </NavLink>
          </MDBCardHeader>
        </MDBCard>
        <MDBCard color='purple' text='white' className='d2'>
          <MDBCardHeader>
            <NavLink to='/schedule' className='text-white'>
              <i class='fas fa-clock' /> Schedule
            </NavLink>
          </MDBCardHeader>
        </MDBCard>
        <MDBCard color='blue' text='white' className='d3'>
          <MDBCardHeader>
            <NavLink to='/settings' className='text-white'>
              <i class='fas fa-cog' /> Settings
            </NavLink>
          </MDBCardHeader>
        </MDBCard>
        <MDBCard color='orange' text='white' className='d4'>
          <MDBCardHeader>
            <NavLink to='/profile' className='text-white'>
              <i class='fas fa-user' /> Profile
            </NavLink>
          </MDBCardHeader>
        </MDBCard>
      </div>
    );
  }
}
