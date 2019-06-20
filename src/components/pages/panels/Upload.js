import React from 'react';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Upload = () => {
	return (
		<Grid container spacing={4}>
			<Grid item xs={12} md={6} lg={4}>
				<Card>Upload</Card>
				<form autoFill='off'>
					<TextField label='Class Name' />
				</form>
			</Grid>
		</Grid>
	);
};

export default Upload;
