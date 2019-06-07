import React from 'react';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';

export const Settings = () => {
	const [checked, setChecked] = React.useState(['wifi']);

	const handleToggle = value => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};
	return (
		<Grid container spacing={4}>
			<Grid item xs={12} md={6} lg={4}>
				<List subheader={<ListSubheader>Settings</ListSubheader>}>
					<ListItem>
						<ListItemText id='switch-list-label-wifi' primary='Wi-Fi' />
						<ListItemSecondaryAction>
							<Switch
								edge='end'
								onChange={handleToggle('wifi')}
								checked={checked.indexOf('wifi') !== -1}
								inputProps={{
									'aria-labelledby': 'switch-list-label-wifi'
								}}
							/>
						</ListItemSecondaryAction>
					</ListItem>
					<ListItem>
						<ListItemText
							id='switch-list-label-bluetooth'
							primary='Bluetooth'
						/>
						<ListItemSecondaryAction>
							<Switch
								edge='end'
								onChange={handleToggle('bluetooth')}
								checked={checked.indexOf('bluetooth') !== -1}
								inputProps={{
									'aria-labelledby': 'switch-list-label-bluetooth'
								}}
							/>
						</ListItemSecondaryAction>
					</ListItem>
				</List>
			</Grid>
		</Grid>
	);
};
