import React, { Component } from 'react';
import NotesStack from '../components/NotesStack';


export default class App extends Component {

  render() {
    return (
      <div className="timernotes-frame">
        <NotesStack />
      </div>
    );
  }
}
