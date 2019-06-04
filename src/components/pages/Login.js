import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

const Login = () => {
  return (
    <MDBCard>
      <MDBCardBody className='mx-4 mt-4'>
        <MDBInput label='Your email' group type='text' validate />
        <MDBInput
          label='Your password'
          group
          type='password'
          validate
          containerClass='mb-0'
        />
        <p className='font-small grey-text d-flex justify-content-end'>
          <a href='#!' className='dark-grey-text font-weight-bold ml-1'>
            Forgot Password?
          </a>
        </p>
        <div className='text-center mb-4 mt-5'>
          <MDBBtn color='danger' type='button' className='btn-block z-depth-2'>
            Log in
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Login;
