import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
	MDBCol,
	MDBCard,
	MDBCardText,
	MDBCardTitle,
	MDBCardBody,
	MDBCardHeader,
	MDBCardFooter
} from 'mdbreact';

export default class ClassListItem extends Component {
	render() {
		const { id, name, view } = this.props;
		const isCard = view === 'cards';
		return (
			<MDBCol sm={isCard ? 6 : 12} md={isCard ? 4 : 12} lg={isCard ? 3 : 12}>
				<MDBCard className='mb-3'>
					<MDBCardHeader>
						{id}
						<ul className='list-inline mb-0'>
							<li className='list-inline-item'>
								<i className='fas fa-users' /> 18
							</li>
							<li className='list-inline-item'>
								<i className='fas fa-portrait' /> 12
							</li>
							<li className='list-inline-item'>
								<i className='fas fa-notes-medical' /> 2
							</li>
							<li className='list-inline-item'>
								<i className='fas fa-exclamation-square' /> 0
							</li>
						</ul>
					</MDBCardHeader>
					<MDBCardBody>
						<MDBCardTitle>{name}</MDBCardTitle>
						<MDBCardText>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</MDBCardText>
					</MDBCardBody>
					<MDBCardFooter>
						<NavLink to={`/classes/${id}`}>
							See Class <i className='fas fa-arrow-right' />
						</NavLink>
					</MDBCardFooter>
				</MDBCard>
			</MDBCol>
		);
	}
}
