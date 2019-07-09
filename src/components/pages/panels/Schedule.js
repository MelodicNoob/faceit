import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Card } from '@material-ui/core';

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

const Schedule = () => {
    // const task = useStyles();
    useStyles();

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Card>
                    <Grid container spacing={4} />
                </Card>
            </Grid>
        </Grid>
    );
};

export default Schedule;
