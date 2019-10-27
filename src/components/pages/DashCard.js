import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core';
import Classes from './panels/classes/Classes';
import Upload from './panels/Upload';
import Profile from './panels/Profile';
import Schedule from './panels/Schedule';
import ThemeContext from '../../context/ThemeContext';

export default function DashCard({ id, name, icon, color }) {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <Card style={{ backgroundColor: `${color}` }} className={id}>
      <CardContent>
        <Typography
          variant='h5'
          component='h2'
          className='text-capitalize mb-3'
        >
          <NavLink onClick={() => changeTheme(color)} to={`/${name}`}>
            <i className={`fas fa-${icon}`} /> {name}
          </NavLink>
        </Typography>

        {name === 'classes' ? (
          <Classes dash />
        ) : name === 'add' ? (
          <Upload dash />
        ) : name === 'schedule' ? (
          <Schedule dash />
        ) : name === 'profile' ? (
          <Profile dash />
        ) : null}
      </CardContent>
    </Card>
  );
}
