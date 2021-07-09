import React, { Component } from 'react';
import { AddStudents } from './AddStudents';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div style={{ marginLeft: 30 }}>
        <h1>Student Management</h1>
        <p>Welcome to the student management.</p>
            < AddStudents />
      </div>
    );
  }
}
