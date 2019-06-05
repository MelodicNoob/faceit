import React, { Component } from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';

import ClassList from '../classes/ClassList';

export default class Classes extends Component {
	state = {
		view: 'cards'
	};

	render() {
		const listView = () => {
			this.setState({ view: 'list' });
		};
		const cardsView = () => {
			this.setState({ view: 'cards' });
		};
		const { view } = this.state;
		const classes = [
			{ id: 3102, name: 'Class 1' },
			{ id: 4183, name: 'Class 2' },
			{ id: 2009, name: 'Class 3' },
			{ id: 2103, name: 'Class 4' },
			{ id: 7782, name: 'Class 5' },
			{ id: 9298, name: 'Class 6' }
		];
		return (
			<MDBCard color='red'>
				<MDBCardHeader className='text-white'>
					<h3 className='float-left'>
						<i className='fal fa-chalkboard-teacher' /> Classes
					</h3>
					<div className='view-selectors float-right'>
						<i
							onClick={listView}
							className={
								view === 'cards' ? 'fas fa-list' : 'fas fa-list active'
							}
						/>
						<i
							onClick={cardsView}
							className={
								view === 'cards' ? 'fas fa-th-large active' : 'fas fa-th-large'
							}
						/>
					</div>
				</MDBCardHeader>
				<MDBCardBody>
					<ClassList classes={classes} view={view} />
				</MDBCardBody>
			</MDBCard>
		);
	}
}
