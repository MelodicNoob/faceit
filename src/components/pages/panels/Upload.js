import React from 'react';

import MomentUtils from '@date-io/moment';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
	mb: {
		margin: theme.spacing(1)
	},
	input: {
		display: 'none'
	},
	formControl: {
		margin: theme.spacing(3)
	}
}));

const Upload = () => {
	const classes = useStyles();

	const days = [
		{
			name: 'monday',
			checked: true
		},
		{
			name: 'tuesday',
			checked: false
		},
		{
			name: 'wednesday',
			checked: false
		},
		{
			name: 'thursday',
			checked: false
		},
		{
			name: 'friday',
			checked: false
		}
	];

	const [selectedDate, setSelectedDate] = React.useState(
		new Date('2014-08-18T21:11:54')
	);
	function handleDateChange(date) {
		setSelectedDate(date);
	}

	return (
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Card>
					<Grid container spacing={4}>
						<Grid item xs={12} md={6}>
							<form>
								<FormControl className={classes.mb} fullWidth>
									<InputLabel htmlFor='class-name'>Class Name</InputLabel>
									<Input id='class-name' type='text' />
								</FormControl>
								<FormControl className={classes.mb} fullWidth>
									<InputLabel htmlFor='class-id'>Class Code</InputLabel>
									<Input id='class-id' type='text' />
								</FormControl>
								<FormControl className={classes.mb}>
									<MuiPickersUtilsProvider utils={MomentUtils}>
										<KeyboardTimePicker
											margin='normal'
											id='mui-pickers-time'
											label='Time picker'
											value={selectedDate}
											onChange={handleDateChange}
											KeyboardButtonProps={{
												'aria-label': 'change time'
											}}
										/>
									</MuiPickersUtilsProvider>
								</FormControl>

								<FormControl
									required
									component='fieldset'
									className={classes.formControl}
								>
									<FormLabel component='legend'>Pick days</FormLabel>
									<FormGroup>
										{days.map(({ name, checked }) => (
											<FormControlLabel
												key={name}
												control={<Checkbox checked={checked} value={name} />}
												label={name}
											/>
										))}
									</FormGroup>
								</FormControl>
							</form>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography variant='h5'>Students</Typography>
							<Button type='button' variant='contained'>
								Add Manually
							</Button>
							<input
								accept='.csv'
								id='upload-csv'
								multiple
								type='file'
								className={classes.input}
							/>
							<label htmlFor='upload-csv'>
								<Button variant='contained' component='span'>
									Upload .csv
								</Button>
							</label>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Upload;
