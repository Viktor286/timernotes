import React, {Component} from 'react';

export default class Timernote extends Component {
  constructor() {
    super();
  }

  render() {
    const { title } = this.props.timernote;

    return (
      <section className="timernote">

        <div className="controls-primary">
          <div className="logotype-btn">
            <div className="logotype-btn__icon">
              <svg version="1.1" viewBox="0 0 50 50">
                <path d="M10.8,47.7c-0.2,0-0.3-0.1-0.5-0.2c-0.3-0.2-0.4-0.5-0.3-0.8l2.6-15.2L1.5,20.7c-0.2-0.2-0.3-0.6-0.2-0.9
                  c0.1-0.3,0.4-0.5,0.7-0.6L17.3,17l6.8-13.8c0.1-0.3,0.4-0.5,0.8-0.5c0.3,0,0.6,0.2,0.8,0.5L32.5,17l15.3,2.2c0.3,0,0.6,0.3,0.7,0.6
                  c0.1,0.3,0,0.6-0.2,0.9L37.2,31.4l2.6,15.2c0.1,0.3-0.1,0.6-0.3,0.8c-0.3,0.2-0.6,0.2-0.9,0.1l-13.7-7.2l-13.7,7.2
                  C11.1,47.6,11,47.7,10.8,47.7L10.8,47.7z M3.9,20.6l10.1,9.9c0.2,0.2,0.3,0.5,0.2,0.8l-2.4,14l12.6-6.6c0.2-0.1,0.5-0.1,0.8,0
                  l12.5,6.6l-2.4-14c0-0.3,0-0.6,0.2-0.8l10.2-9.9l-14-2c-0.3,0-0.5-0.2-0.6-0.5L24.9,5.4l-6.3,12.7c-0.1,0.3-0.4,0.4-0.6,0.5
                  L3.9,20.6z M3.9,20.6"/>
              </svg>
            </div>
          </div>
          <div className="expand-controls">
            <svg version="1.1" viewBox="0 0 96.2 9.3">
              <path d="M94.5,9.3H1.7C0.8,9.3,0,8.5,0,7.6V1.7C0,0.8,0.8,0,1.7,0h92.9c0.9,0,1.6,0.8,1.6,1.6v5.9C96.2,8.5,95.4,9.3,94.5,9.3z"/>
            </svg>
          </div>
        </div>

        <div className="timernote-body">
          <div className="timer-state-info">
            <div className="timer-state-info__cycle-state">
              1day
            </div>
          </div>

          <div className="timernote-title">{title}</div>
          <div className="progress-bar-total">
            <div className="progress-bar-total_active">
            </div>
          </div>
          <div className="progress-bar-info">
            <div className="progress-bar-info__time-passed">4 hours 20 min</div>
            <div className="progress-bar-info__time-await">1 hour 7min</div>
          </div>

        </div>

        <div className="controls-secondary">
          <div className="dragger">
            <svg version="1.1" x="0px" y="0px"
                 viewBox="0 0 100 100">
              <path d="M95.6,24.1H4.1c-1.4,0-2.6-1.2-2.6-2.6v-9.4c0-1.4,1.2-2.6,2.6-2.6h91.5c1.4,0,2.6,1.2,2.6,2.6v9.4
	C98.2,22.9,97,24.1,95.6,24.1z"/>
              <path d="M95.6,57.5H4.1c-1.4,0-2.6-1.2-2.6-2.6v-9.4c0-1.4,1.2-2.6,2.6-2.6h91.5c1.4,0,2.6,1.2,2.6,2.6V55
	C98.2,56.4,97,57.5,95.6,57.5z"/>
              <path d="M95.6,91H4.1c-1.4,0-2.6-1.2-2.6-2.6v-9.4c0-1.4,1.2-2.6,2.6-2.6h91.5c1.4,0,2.6,1.2,2.6,2.6v9.4C98.2,89.8,97,91,95.6,91z"
              />
            </svg>
          </div>
        </div>
      </section>
    )
  }
}