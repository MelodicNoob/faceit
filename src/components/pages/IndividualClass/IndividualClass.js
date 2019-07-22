import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import StudentListItem from './StudentListItem';

const IndividualStudentList = ({ students, view }) => {
    const studentsList = students.map(
        ({ id, firstName, medicalCount, issuesCount }) => (
            <StudentListItem
                key={id}
                id={id}
                firstName={firstName}
                medicalCount={medicalCount}
                issuesCount={issuesCount}
                view={view}
            />
        )
    );
    return (
        <>
            {view === 'cards' ? (
                <Grid container spacing={1}>
                    {studentsList}
                </Grid>
            ) : (
                studentsList
            )}
        </>
    );
};

export default class IndividualClass extends Component {
    render() {
        const { view } = this.props;
        const students = [
            { id: 1, firstName: 'Joshua', medicalCount: 0, issuesCount: 0 },
            { id: 2, firstName: 'Mark', medicalCount: 2, issuesCount: 1 },
            { id: 3, firstName: 'Jack', medicalCount: 1, issuesCount: 1 },
            { id: 4, firstName: 'Ben', medicalCount: 0, issuesCount: 0 },
            { id: 5, firstName: 'Kirk', medicalCount: 0, issuesCount: 0 },
            { id: 6, firstName: 'Adam', medicalCount: 1, issuesCount: 0 }
        ];
        return <IndividualStudentList students={students} view={view} />;
    }
}
