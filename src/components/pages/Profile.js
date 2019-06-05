import React, { Component } from 'react';

import { MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';

export default class Profile extends Component {
	render() {
		return (
			<MDBCard color='orange'>
				<MDBCardHeader>
					<h3 className='text-white'>
						<i className='fal fa-user' /> Profile
					</h3>
				</MDBCardHeader>
				<MDBCardBody />
			</MDBCard>
		);
	}
}
