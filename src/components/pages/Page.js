import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, darken } from '@material-ui/core/styles';
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
		const mainTheme = createMuiTheme({
			palette: {
				primary: {
					main: color
				},
				secondary: {
					main: darken(color, 0.1)
				}
			}
		});

		const childrenWithExtraProp = React.Children.map(children, child => {
			return React.cloneElement(child, {
				view
			});
		});

		return (
			<Card style={{ backgroundColor: color }}>
				<div className='card-header clearfix text-white'>
					<Typography variant='h5' className='float-left mt-1 text-capitalize'>
						<i className={`fa fa-${icon}`} /> {title}
					</Typography>

					<ViewToggler view={view} toggle={this.toggleView} />
				</div>
				<CardContent>
					<ThemeProvider theme={mainTheme}>
						{childrenWithExtraProp}
					</ThemeProvider>
				</CardContent>
			</Card>
		);
	}
}
