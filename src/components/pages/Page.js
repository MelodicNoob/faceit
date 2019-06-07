import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ViewToggler from '../layout/ViewToggler';

export default class Page extends Component {
	constructor(props) {
		super(props);

		this.toggleView = view => {
			this.setState({
				view
			});
		};

		this.state = {
			view: 'cards'
		};
	}

	render() {
		const { view } = this.state;
		const { title, color, icon, children } = this.props;
		return (
			<Card style={{ backgroundColor: color }}>
				<CardContent>
					<div className='cardheader clearfix'>
						<Typography variant='h4' gutterBottom className='float-left'>
							<i className={`fal fa-${icon}`} /> {title}
						</Typography>

						<ViewToggler view={view} toggle={this.toggleView} />
					</div>
					{children}
				</CardContent>
			</Card>
		);
	}
}
