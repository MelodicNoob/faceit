import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Card, FormControl, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    mb: {
        margin: theme.spacing(1)
    },
    input: {
        display: 'none'
    },
    formControl: {
        margin: theme.spacing(3)
    },
    button: {
        margin: theme.spacing(2)
    },
    todoTitle: {
        textAlign: 'center',
        margin: theme.spacing(1)
    },
    buttons: {},
    deleteItemButton: {
        margin: theme.spacing(1)
    },
    completeItemButton: {
        margin: theme.spacing(1)
    },
    taskItems: {
        padding: theme.spacing(1)
    },
    taskItem: {}
}));

const task = () => {
    const task = useStyles();

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Card>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <form>
                                <FormControl className={task.mb} fullWidth>
                                    <InputLabel required htmlFor='task'>
                                        Task
                                    </InputLabel>
                                    <Input id='task' type='text' />
                                </FormControl>
                                <FormControl fullWidth>
                                    <Button
                                        variant='contained'
                                        color='default'
                                        className={task.button}
                                    >
                                        Add Item
                                    </Button>
                                </FormControl>
                            </form>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={task.taskItems}>
                                <div className={task.taskItem}>
                                    <Typography>
                                        <p>Mark Student's work</p>
                                    </Typography>
                                    <div className={task.buttons}>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            className={task.completeItemButton}
                                        >
                                            Complete Item
                                        </Button>
                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            className={task.deleteItemButton}
                                        >
                                            Delete Item
                                            <DeleteIcon
                                                className={task.rightIcon}
                                            />
                                        </Button>
                                    </div>
                                </div>
                                <div className={task.taskItem}>
                                    <Typography>
                                        <p>Mark Student's work</p>
                                    </Typography>
                                    <div className={task.buttons}>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            className={task.completeItemButton}
                                        >
                                            Complete Item
                                        </Button>
                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            className={task.deleteItemButton}
                                        >
                                            Delete Item
                                            <DeleteIcon
                                                className={task.rightIcon}
                                            />
                                        </Button>
                                    </div>
                                </div>
                                <div className={task.taskItem}>
                                    <Typography>
                                        <p>Mark Student's work</p>
                                    </Typography>
                                    <div className={task.buttons}>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            className={task.completeItemButton}
                                        >
                                            Complete Item
                                        </Button>
                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            className={task.deleteItemButton}
                                        >
                                            Delete Item
                                            <DeleteIcon
                                                className={task.rightIcon}
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
};

export default task;
