import React from 'react';

import { Card, CardContent, Grid } from '@material-ui/core';

const Home = () => {
    return (
        <Card>
            <CardContent className='mx-4 mt-4'>
                <Grid container spacing={4} justify='center'>
                    <h1>FaceIT</h1>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Home;
