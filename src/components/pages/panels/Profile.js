import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, FormControl, Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import AvatarPH from '../../../assets/img/avatar.jpg';

const useStyles = makeStyles(theme => ({
    bigAvatar: {
        width: '100%',
        height: 'auto',
        margin: theme.spacing(1)
    },
    mb: {
        margin: theme.spacing(1)
    }
}));

const Profile = () => {
    const profile = useStyles();

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Card>
                    <Grid container spacing={3}>
                        <Grid item xs={11} lg={3}>
                            <Avatar
                                className={profile.bigAvatar}
                                alt='Your Name'
                                src={AvatarPH}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <form>
                                <FormControl className={profile.mb} fullWidth>
                                    <InputLabel required htmlFor='firstName'>
                                        First Name
                                    </InputLabel>
                                    <Input
                                        id='firstName'
                                        type='text'
                                        value='John'
                                    />
                                </FormControl>
                                <FormControl className={profile.mb} fullWidth>
                                    <InputLabel required htmlFor='lastName'>
                                        Last Name
                                    </InputLabel>
                                    <Input
                                        id='lastName'
                                        type='text'
                                        value='Doe'
                                    />
                                </FormControl>
                                <FormControl className={profile.mb} fullWidth>
                                    <InputLabel required htmlFor='class'>
                                        Class
                                    </InputLabel>
                                    <Input
                                        id='class'
                                        type='number'
                                        value='3102'
                                    />
                                </FormControl>
                                <FormControl className={profile.mb} fullWidth>
                                    <InputLabel required htmlFor='email'>
                                        Email
                                    </InputLabel>
                                    <Input
                                        id='email'
                                        type='email'
                                        value='johndoe@test.com'
                                    />
                                </FormControl>
                                <FormControl className={profile.mb} fullWidth>
                                    <InputLabel required htmlFor='phone-number'>
                                        Phone Number
                                    </InputLabel>
                                    <Input
                                        id='phone-number'
                                        type='tel'
                                        value='0491 570 156'
                                    />
                                </FormControl>
                                <FormControl className='mb-4 mt-1' fullWidth>
                                    <Button variant='contained' color='primary'>
                                        Update Profile
                                    </Button>
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
