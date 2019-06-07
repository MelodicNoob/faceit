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
		const { title, color, theme, icon, children } = this.props;
		const mainTheme = createMuiTheme({
			palette: {
				type: theme,
				primary: {
					main: color
				},
				secondary: {
					main: darken(color, 0.2)
				}
			}
		});
		return (
			<Card style={{ backgroundColor: color }}>
				<CardContent>
					<div className='clearfix text-white'>
						<Typography variant='h4' gutterBottom className='float-left'>
							<i className={`fal fa-${icon}`} /> {title}
						</Typography>

						<ViewToggler view={view} toggle={this.toggleView} />
					</div>
					<ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
				</CardContent>
			</Card>
		);
	}
}
