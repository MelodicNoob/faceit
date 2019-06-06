import React, { Component } from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';

import ViewToggler from '../layout/ViewToggler';

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.toggleView = () => {
      this.setState(state => ({
        view: !state.view
      }));
    };

    this.state = {
      view: 'cards',
      toggleView: this.toggleView
    };
  }

  render() {
    const { title, color, icon, children } = this.props;
    return (
      <MDBCard color={color}>
        <MDBCardHeader>
          <h3 className='text-white float-left'>
            <i className={`fal fa-${icon}`} /> {title}
          </h3>

          <ViewToggler />
        </MDBCardHeader>
        <MDBCardBody>{children}</MDBCardBody>
      </MDBCard>
    );
  }
}
