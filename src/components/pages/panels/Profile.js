import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import AvatarPH from '../../../assets/img/avatar.jpg';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
	bigAvatar: {
		width: '100%',
		height: 'auto'
	}
});

const Profile = () => {
	const classes = useStyles();
	return (
		<Grid container spacing={4}>
			<Grid item xs={4} lg={3}>
				<Avatar className={classes.bigAvatar} alt='Your Name' src={AvatarPH} />
			</Grid>
			<Grid item xs={8} lg={9}>
				<Typography>Hello</Typography>
			</Grid>
		</Grid>
	);
};

export default Profile;
