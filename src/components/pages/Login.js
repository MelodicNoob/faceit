import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
	margin: {
		margin: theme.spacing(1)
	},
	textField: {
		flexBasis: 200
	}
}));

const Login = () => {
	const classes = useStyles();
	const [values, setValues] = React.useState({
		email: '',
		password: '',
		showPassword: false
	});

	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};
	return (
		<Card>
			<CardContent className='mx-4 mt-4'>
				<Grid container spacing={4} justify='center'>
					<Grid item md={8} lg={6}>
						<FormControl
							fullWidth
							className={clsx(classes.margin, classes.textField)}
						>
							<InputLabel htmlFor='adornment-email'>Your Email</InputLabel>
							<Input
								id='adornment-email'
								type='email'
								value={values.email}
								onChange={handleChange('email')}
							/>
						</FormControl>
						<FormControl
							fullWidth
							className={clsx(classes.margin, classes.textField)}
						>
							<InputLabel htmlFor='adornment-password'>Password</InputLabel>
							<Input
								id='adornment-password'
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								onChange={handleChange('password')}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='Toggle password visibility'
											onClick={handleClickShowPassword}
										>
											{values.showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<p className='font-small d-flex justify-content-end'>
							<a href='#!' className='font-weight-bold mt-2'>
								Forgot Password?
							</a>
						</p>
						<div className='text-center mb-4 mt-5'>
							<Button color='primary' variant='contained' className='btn-block'>
								Log in
							</Button>
						</div>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Login;
