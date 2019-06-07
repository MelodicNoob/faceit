import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Edit from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
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
				<Card className='mb-3'>
					<CardContent>
						<Typography variant='h5'>{id}</Typography>
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
						<h3>{name}</h3>
						{this.state.edit ? (
							<>
								<Input icon='pencil-alt' type='textarea' label='Notes' />
								<Button
									color='primary'
									onClick={this.editMode}
									size='small'
									className='float-right'
								>
									<SaveIcon /> Save
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
									variant='outlined'
									onClick={this.editMode}
									size='small'
									className='float-right'
								>
									<Edit /> Edit
								</Button>
							</>
						)}
					</CardContent>
					<CardActions>
						<Button size='small' component={CollisionLink}>
							See Class <KeyboardArrowRight />
						</Button>
					</CardActions>
				</Card>
			</Grid>
		);
	}
}
