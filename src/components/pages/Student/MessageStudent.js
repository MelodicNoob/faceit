import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Grid,
    FormControl,
    Input,
    InputLabel,
    makeStyles,
    Button
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    },
    textField: {
        flexBasis: 200
    }
}));

const MessageStudent = () => {
    const classes = useStyles();
    const [student, setValues] = useState({
        email: 'johndoe@tafe.wa.edu.au'
    });

    const handleChange = prop => event => {
        setValues({ ...student, [prop]: event.target.value });
    };
    return (
        <Card>
            <CardContent className='mx-4 mt-4'>
                <Grid container spacing={4} justify='center'>
                    <Grid item md={8} lg={6}>
                        <h1 className='text-center m-1'>Message Student</h1>
                        <FormControl
                            fullWidth
                            className={clsx(classes.margin, classes.textField)}
                        >
                            <InputLabel htmlFor='adornment-email'>
                                Student's Email
                            </InputLabel>
                            <Input
                                id='adornment-email'
                                type='email'
                                value={student.email}
                                onChange={handleChange('email')}
                            />
                        </FormControl>
                        <div className='text-center mb-4 mt-5'>
                            <Button
                                color='primary'
                                variant='contained'
                                className='btn-block'
                            >
                                Message Student
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default MessageStudent;
