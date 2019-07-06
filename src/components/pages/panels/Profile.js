import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, FormControl, Typography, Avatar } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import AvatarPH from '../../../assets/img/avatar.jpg';

const useStyles = makeStyles(theme => ({
    bigAvatar: {
        width: '100%',
        height: 'auto',
        margin: theme.spacing(1)
    }
}));

const Profile = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(['wifi']);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Card>
                    <Grid container spacing={3}>
                        <Grid item xs={4} lg={3}>
                            <Avatar
                                className={classes.bigAvatar}
                                alt='Your Name'
                                src={AvatarPH}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <form>
                                <FormControl fullWidth>
                                    <InputLabel required htmlFor='firstname'>
                                        First Name
                                    </InputLabel>
                                    <Input id='firstname' type='text' />
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel required htmlFor='class'>
                                        Class
                                    </InputLabel>
                                    <Input id='class' type='text' />
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel required htmlFor='email'>
                                        Email
                                    </InputLabel>
                                    <Input id='email' type='email' />
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel required htmlFor='phone-number'>
                                        Phone Number
                                    </InputLabel>
                                    <Input id='phone-number' type='text' />
                                </FormControl>
                            </form>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Profile;
