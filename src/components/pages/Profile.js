import React, { Component } from 'react';

import {
	MDBCard,
	MDBCardBody,
	MDBCardHeader,
	MDBIcon,
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
						<i className='fal fa-user' /> Profile
					</h3>
				</MDBCardHeader>
				<MDBCardBody>
					<MDBRow>
						<MDBCol md={6} lg={4}>
							<MDBCard>
								<MDBAvatar className='mx-auto white'>
									<img
										src='https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg'
										alt=''
										className='rounded-circle img-fluid'
									/>
								</MDBAvatar>
								<MDBCardBody cascade>
									<h4 className='font-weight-bold mb-4'>John Doe</h4>
									<hr />
									<p className='dark-grey-text mt-4'>
										<MDBIcon icon='quote-left' className='pr-2' />
										Lorem ipsum dolor sit amet eos adipisci, consectetur
										adipisicing elit.
									</p>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</MDBCardBody>
			</MDBCard>
		);
	}
}
