import React, { Component } from 'react';
import Timernote from '../components/Timernote';

export default class NotesStack extends Component {

  render() {
    return (
      <section className="timenotes-stack">
          <Timernote />
          <Timernote />
          <Timernote />
      </section>
    );
  }

}