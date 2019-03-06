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
      <Navbar color='primary' dark expand='md'>
        <LinkContainer to='/'>
          <NavbarBrand>FaceCheat</NavbarBrand>
        </LinkContainer>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <LinkContainer to='/dashboard'>
              <NavItem>
                <NavLink>Dashboard</NavLink>
              </NavItem>
            </LinkContainer>
            <LinkContainer to='/profile'>
              <NavItem>
                <NavLink>Profile</NavLink>
              </NavItem>
            </LinkContainer>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
