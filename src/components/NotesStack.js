import React, { Component } from 'react';

import {connect} from 'react-redux';
import Timernote from '../components/Timernote';


class NotesStack extends Component {
  constructor() {
    super();
  }

  renderStack() {
    return this.props.timerNotesTotal.map((timerNote) => {
      return (
          <Timernote
            key={timerNote.id}
            timernote={timerNote}
          />
      );
    });
  }

  render() {
    return (
      <section className="timernotes-stack timernotes-stack_dark-theme">
        {this.renderStack()}
      </section>
    );
  }

}

function mapStateToProps(state) {
  return {
    timerNotesTotal: state.timerNotesTotal
  };
}

export default connect(mapStateToProps)(NotesStack);
