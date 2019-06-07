import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';

const useStyles = makeStyles({
	bigAvatar: {
		width: '100%',
		height: 'auto'
	}
});

export const Profile = () => {
	const classes = useStyles();
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
			<Grid item xs={4} lg={3}>
				<Avatar
					className={classes.bigAvatar}
					alt='Remy Sharp'
					src='https://material-ui.com/static/images/avatar/1.jpg'
				/>
			</Grid>
			<Grid item xs={8} lg={9}>
				<List
					subheader={<ListSubheader>Settings</ListSubheader>}
					className={classes.root}
				>
					<ListItem>
						<ListItemIcon>
							<WifiIcon />
						</ListItemIcon>
						<ListItemText id='switch-list-label-wifi' primary='Wi-Fi' />
						<ListItemSecondaryAction>
							<Switch
								edge='end'
								onChange={handleToggle('wifi')}
								checked={checked.indexOf('wifi') !== -1}
								inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
							/>
						</ListItemSecondaryAction>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<BluetoothIcon />
						</ListItemIcon>
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
