import React from 'react';

import MomentUtils from '@date-io/moment';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker
} from '@material-ui/pickers';
import { TextField } from '@material-ui/core';

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

const Schedule = () => {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date());
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
                                    <InputLabel htmlFor='class-name'>
                                        Task's name
                                    </InputLabel>
                                    <Input id='class-name' type='text' />
                                </FormControl>
                                <FormControl className={classes.mb} fullWidth>
                                    <TextField
                                        id='standard-multiline-flexible'
                                        label="Task's description"
                                        multiline
                                        rowsMax='4'
                                        className={classes.textField}
                                        margin='normal'
                                    />
                                </FormControl>
                                <FormControl className={classes.mb}>
                                    <MuiPickersUtilsProvider
                                        utils={MomentUtils}
                                    >
                                        <KeyboardDatePicker
                                            margin='normal'
                                            id='mui-pickers-date'
                                            label='Date picker'
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date'
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </FormControl>
                                <FormControl className={classes.mb}>
                                    <MuiPickersUtilsProvider
                                        utils={MomentUtils}
                                    >
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
                                <Button
                                    className={classes.mb}
                                    fullWidth
                                    type='button'
                                    variant='contained'
                                    color='primary'
                                >
                                    Add Task To Schedule
                                </Button>
                            </form>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <h1 className='text-center m-1'>Schedule</h1>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Schedule;
