import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import MobileLogo from '../../assets/MobileLogo';

class Header extends Component {
  render() {
    return (
      <header>
        <MobileLogo />
        <div className='header-buttons'>
          <NavLink to='/dashboard'>
            <i className='fal fa-home' />
          </NavLink>
          <NavLink to='/'>
            <i className='fal fa-power-off' aria-hidden='true' />
          </NavLink>
        </div>
        <Navigation />
      </header>
    );
  }
}

export default Header;
