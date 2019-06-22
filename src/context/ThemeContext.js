import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core';

export const colors = {
	red: '#FF0000',
	purple: '#453192',
	orange: '#fbb03b',
	blue: '#29abe2'
};

const defaultTheme = createMuiTheme({
	palette: {
		primary: {
			main: colors.red
		}
	}
});

const ThemeContext = React.createContext({
	theme: defaultTheme,
	changeTheme: () => {}
});

export default ThemeContext;

export function ThemeProvider(props) {
	const [theme, setTheme] = useState(defaultTheme);
	const changeTheme = color => {
		setTheme(
			createMuiTheme({
				palette: {
					primary: {
						main: color
					}
				}
			})
		);
	};
	return (
		<ThemeContext.Provider
			value={{
				theme,
				changeTheme
			}}
		>
			{props.children}
		</ThemeContext.Provider>
	);
}
