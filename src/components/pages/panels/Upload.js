import React from 'react';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const Upload = () => {
	return (
		<Grid container spacing={4}>
			<Grid item xs={12} md={6} lg={4}>
				<Card>Upload</Card>
			</Grid>
		</Grid>
	);
};

export default Upload;
