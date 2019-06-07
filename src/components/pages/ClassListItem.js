import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
	Card,
	CardContent,
	CardActions,
	Button,
	TextField,
	Grid,
	Typography
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

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

		const CollisionLink = React.forwardRef((props, ref) => (
			<NavLink innerRef={ref} to={`/classes/${id}`} {...props} />
		));

		return (
			<Grid
				item
				className={edit ? 'edit class-list-item' : 'class-list-item'}
				sm={isCard ? 6 : 12}
				md={isCard ? 4 : 12}
				lg={isCard ? 3 : 12}
			>
				<Card className='position-relative'>
					<div className='card-header'>
						<ul className='list-inline mb-0'>
							<li className='list-inline-item'>
								<i className='fas fa-users' /> 18
							</li>
							<li className='list-inline-item'>
								<i className='fas fa-notes-medical' /> 2
							</li>
							<li className='list-inline-item'>
								<i className='fas fa-exclamation-triangle' /> 0
							</li>
							<li className='list-inline-item'>
								<i className='fas fa-globe' /> 1
							</li>
						</ul>
					</div>
					<CardContent>
						<Typography variant='h5'>{name}</Typography>
						<Typography variant='button'>{id}</Typography>
						{this.state.edit ? (
							<>
								<TextField
									id='standard-multiline-flexible'
									label='Notes'
									multiline
									fullWidth
									rows='4'
									rowsMax='5'
									margin='normal'
								/>

								<Button
									color='primary'
									variant='contained'
									onClick={this.editMode}
									size='small'
									className='float-right my-2'
								>
									Save
								</Button>
								<Button
									color='primary'
									variant='outlined'
									onClick={this.editMode}
									size='small'
									className='float-right my-2 mr-2'
								>
									<CancelIcon className='mr-1' style={{ fontSize: 20 }} />{' '}
									Cancel
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
									color='primary'
									onClick={this.editMode}
									size='small'
									className='position-absolute'
									style={{ top: 10, right: 10 }}
									variant='outlined'
								>
									<EditIcon style={{ fontSize: 20, marginRight: '3px' }} /> Edit
								</Button>
							</>
						)}
					</CardContent>
					<CardActions>
						<Button color='primary' size='small' component={CollisionLink}>
							See Class <KeyboardArrowRight />
						</Button>
					</CardActions>
				</Card>
			</Grid>
		);
	}
}
