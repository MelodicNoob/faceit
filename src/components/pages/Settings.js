import React, { Component } from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';

export default class Settings extends Component {
  render() {
    return (
      <MDBCard color='blue'>
        <MDBCardHeader>
          <h3 className='text-white'>
            <i class='fal fa-cog' /> Settings
          </h3>
        </MDBCardHeader>
        <MDBCardBody />
      </MDBCard>
    );
  }
}
