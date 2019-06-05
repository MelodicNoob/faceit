import React, { Component } from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';

export default class Schedule extends Component {
	render() {
		return (
			<MDBCard color='purple'>
				<MDBCardHeader>
					<h3 className='text-white'>
						<i className='fal fa-clock' /> Schedule
					</h3>
				</MDBCardHeader>
				<MDBCardBody />
			</MDBCard>
		);
	}
}
