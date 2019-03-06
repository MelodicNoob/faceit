import React, { Component } from 'react';
import ClassList from '../classes/ClassList';

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <h1 className='display-4 mb-4'>DASHBOARD</h1>
        <ClassList />{' '}
      </>
    );
  }
}
