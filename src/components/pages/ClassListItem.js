import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

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
			<Grid
				item
				className={edit ? 'edit class-list-item' : 'class-list-item'}
				sm={isCard ? 6 : 12}
				md={isCard ? 4 : 12}
				lg={isCard ? 3 : 12}
			>
				<Card className='mb-3'>
					<CardHeader>
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
					</CardHeader>
					<CardContent>
						<h3>{name}</h3>
						{this.state.edit ? (
							<>
								<Input icon='pencil-alt' type='textarea' label='Notes' />
								<Button
									onClick={this.editMode}
									size='sm'
									className='float-right'
								>
									<i className='fas fa-check' /> Save
								</Button>
							</>
						) : (
							<>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Accusantium numquam deleniti voluptate quam vitae debitis
									molestias doloribus exercitationem.
								</p>
								<Button
									outline
									onClick={this.editMode}
									size='sm'
									className='float-right'
								>
									<i className='fas fa-pencil' /> Edit
								</Button>
							</>
						)}
					</CardContent>
					<CardActionArea>
						<NavLink to={`/classes/${id}`}>
							See Class <i className='fas fa-arrow-right' />
						</NavLink>
					</CardActionArea>
				</Card>
			</Grid>
		);
	}
}
