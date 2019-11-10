import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardContent } from '@material-ui/core';
const IndividualStudent = () => {
    const [student, updateStudent] = useState({
        id: 0,
        firstName: 'John',
        lastName: 'Doe'
    });

    const CollisionLink = React.forwardRef((props, ref) => (
        <NavLink
            innerRef={ref}
            to={`/students/${student.id}/message`}
            {...props}
        />
    ));

    return (
        <Card>
            <CardContent>
                <h1 className='text-center'>
                    {student.firstName} {student.lastName}
                </h1>
                <Button
                    variant='contained'
                    color='primary'
                    component={CollisionLink}
                >
                    Message Student
                </Button>
            </CardContent>
        </Card>
    );
};

export default IndividualStudent;
