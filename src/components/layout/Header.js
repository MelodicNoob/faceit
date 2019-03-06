import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { ReactComponent as Logo } from '../../face.svg';

import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color='primary' dark expand='md' className='mb-4'>
        <LinkContainer to='/'>
          <NavbarBrand>
            <Logo fill='white' height={30} /> FaceCheat
          </NavbarBrand>
        </LinkContainer>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <LinkContainer to='/dashboard'>
                <NavLink>Dashboard</NavLink>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to='/profile'>
                <NavLink>Profile</NavLink>
              </LinkContainer>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
