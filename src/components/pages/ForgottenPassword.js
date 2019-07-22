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
    InputLabel
} from '@material-ui/core';

import ThemeContext from '../../context/ThemeContext';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    },
    textField: {
        flexBasis: 200
    }
}));

const ForgottenPassword = () => {
    const classes = useStyles();
    const { theme } = useContext(ThemeContext);
    const [values, setValues] = React.useState({
        email: ''
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
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
                            <InputLabel htmlFor='adornment-email'>
                                Email for the account
                            </InputLabel>
                            <Input
                                id='adornment-email'
                                type='email'
                                value={values.email}
                                onChange={handleChange('email')}
                            />
                        </FormControl>
                        <div className='text-center mb-4 mt-5'>
                            <Button
                                color={theme.palette.primary.main}
                                variant='contained'
                                className='btn-block'
                            >
                                Send Password Reset
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ForgottenPassword;
