import React, { Component } from 'react';

import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardUp,
  MDBAvatar,
  MDBRow,
  MDBCol
} from 'mdbreact';

export default class Profile extends Component {
  render() {
    return (
      <MDBCard color='orange'>
        <MDBCardHeader>
          <h3 className='text-white'>
            <i class='fal fa-user' /> Profile
          </h3>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md={3}>
              <MDBAvatar className='white' circle>
                <img
                  src='https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg'
                  alt=''
                  className='rounded-circle'
                />
              </MDBAvatar>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
