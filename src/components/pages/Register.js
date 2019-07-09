import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import {
    Card,
    CardContent,
    Button,
    FormControl,
    Grid,
    Input,
    InputAdornment,
    InputLabel,
    IconButton
} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ThemeContext from '../../context/ThemeContext';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    },
    textField: {
        flexBasis: 200
    }
}));

const Register = () => {
    const classes = useStyles();
    const { theme } = useContext(ThemeContext);
    const [values, setValues] = React.useState({
        name: '',
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
                            <InputLabel htmlFor='adornment-name'>
                                Your Name
                            </InputLabel>
                            <Input
                                id='adornment-name'
                                type='text'
                                value={values.name}
                                onChange={handleChange('name')}
                            />
                        </FormControl>
                        <FormControl
                            fullWidth
                            className={clsx(classes.margin, classes.textField)}
                        >
                            <InputLabel htmlFor='adornment-email'>
                                Your Email
                            </InputLabel>
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
                            <InputLabel htmlFor='adornment-password'>
                                Password
                            </InputLabel>
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
                                            {values.showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <div className='text-center mb-4 mt-5'>
                            <Button
                                color={theme.palette.primary.main}
                                variant='contained'
                                className='btn-block'
                            >
                                Register
                            </Button>
                            <Button
                                color={theme.palette.primary.main}
                                variant='contained'
                                className='btn-block'
                                href='/login'
                            >
                                Login
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Register;
