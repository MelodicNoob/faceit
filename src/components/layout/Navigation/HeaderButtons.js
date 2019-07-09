import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/HelpOutline';

import { colors } from '../../../context/ThemeContext';
import ThemeContext from '../../../context/ThemeContext';

export default function HeaderButtons() {
    const { changeTheme } = useContext(ThemeContext);
    const CollisionLink = React.forwardRef((props, ref) => (
        <NavLink innerRef={ref} to={props.link} {...props} />
    ));
    return (
        <div className='header-buttons'>
            <IconButton
                onClick={() => changeTheme(colors.red)}
                link='/dashboard'
                component={CollisionLink}
            >
                <HomeIcon fontSize='large' />
            </IconButton>
            <IconButton
                onClick={() => changeTheme(colors.red)}
                link='/login'
                component={CollisionLink}
            >
                <HelpIcon fontSize='large' />
            </IconButton>
        </div>
    );
}
