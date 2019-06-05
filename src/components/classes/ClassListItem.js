import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
	MDBBtn,
	MDBCol,
	MDBCard,
	MDBCardTitle,
	MDBCardBody,
	MDBCardHeader,
	MDBCardFooter,
	MDBCardText,
	MDBInput
} from 'mdbreact';

export default class ClassListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false
		};
	}
	editMode = () => {
		this.setState({ edit: !this.state.edit });
	};
	render() {
		const { edit } = this.state;
		const { id, name, view } = this.props;
		const isCard = view === 'cards';
		return (
			<MDBCol
				className={edit ? 'edit class-list-item' : 'class-list-item'}
				sm={isCard ? 6 : 12}
				md={isCard ? 4 : 12}
				lg={isCard ? 3 : 12}
			>
				<MDBCard className='mb-3'>
					<MDBCardHeader>
						{id}
						<ul className='list-inline mb-0'>
							<li className='list-inline-item'>
								<i className='fas fa-users' /> 18
							</li>
							<li className='list-inline-item'>
								<i className='fas fa-notes-medical' /> 2
							</li>
							<li className='list-inline-item'>
								<i className='fas fa-exclamation-square' /> 0
							</li>
							<li className='list-inline-item'>
								<i className='fas fa-globe' /> 1
							</li>
						</ul>
					</MDBCardHeader>
					<MDBCardBody>
						<MDBCardTitle>{name}</MDBCardTitle>
						{this.state.edit ? (
							<>
								<MDBInput icon='pencil-alt' type='textarea' label='Notes' />
								<MDBBtn
									onClick={this.editMode}
									size='sm'
									className='float-right'
								>
									<i className='fas fa-check' /> Save
								</MDBBtn>
							</>
						) : (
							<>
								<MDBCardText>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Accusantium numquam deleniti voluptate quam vitae debitis
									molestias doloribus exercitationem.
								</MDBCardText>
								<MDBBtn
									outline
									onClick={this.editMode}
									size='sm'
									className='float-right'
								>
									<i className='fas fa-pencil' /> Edit
								</MDBBtn>
							</>
						)}
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
