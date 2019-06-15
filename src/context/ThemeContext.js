import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
	red: '#FF0000',
	purple: '#453192',
	orange: '#fbb03b',
	blue: '#29abe2'
};

export const theme = {
	palette: {
		primary: {
			main: colors.red
		}
	}
};

export const newTheme = main =>
	createMuiTheme({
		palette: {
			primary: {
				main
			}
		}
	});

export const ThemeContext = React.createContext({
	theme,
	changeTheme: () => {}
});
