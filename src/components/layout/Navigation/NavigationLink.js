import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationLink extends Component {
  render() {
    const { id, name, linkColor } = this.props.link;
    return (
      <li key={id}>
        <NavLink to={`/${name}`} style={{ background: `${linkColor}` }}>
          {name}
        </NavLink>
      </li>
    );
  }
}
