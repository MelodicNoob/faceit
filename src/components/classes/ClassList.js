import React, { Component } from 'react';

import { Row } from 'reactstrap';

import Class from './Class';

export default class ClassList extends Component {
  render() {
    return (
      <Row>
        <Class />
      </Row>
    );
  }
}
