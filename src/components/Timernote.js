import React, {Component} from 'react';

export default class Timernote extends Component {
  constructor() {
    super();
  }

  render() {
    const { title, description } = this.props.timernote;

    return (
      <section className="timenote dark-theme">

        <div className="timenote__main-aside">
          <div className="timenote__logotype">
            <div className="icon">
              <svg version="1.1" viewBox="0 0 50 50">
                <path id="icon" d="M10.8,47.7c-0.2,0-0.3-0.1-0.5-0.2c-0.3-0.2-0.4-0.5-0.3-0.8l2.6-15.2L1.5,20.7c-0.2-0.2-0.3-0.6-0.2-0.9
                  c0.1-0.3,0.4-0.5,0.7-0.6L17.3,17l6.8-13.8c0.1-0.3,0.4-0.5,0.8-0.5c0.3,0,0.6,0.2,0.8,0.5L32.5,17l15.3,2.2c0.3,0,0.6,0.3,0.7,0.6
                  c0.1,0.3,0,0.6-0.2,0.9L37.2,31.4l2.6,15.2c0.1,0.3-0.1,0.6-0.3,0.8c-0.3,0.2-0.6,0.2-0.9,0.1l-13.7-7.2l-13.7,7.2
                  C11.1,47.6,11,47.7,10.8,47.7L10.8,47.7z M3.9,20.6l10.1,9.9c0.2,0.2,0.3,0.5,0.2,0.8l-2.4,14l12.6-6.6c0.2-0.1,0.5-0.1,0.8,0
                  l12.5,6.6l-2.4-14c0-0.3,0-0.6,0.2-0.8l10.2-9.9l-14-2c-0.3,0-0.5-0.2-0.6-0.5L24.9,5.4l-6.3,12.7c-0.1,0.3-0.4,0.4-0.6,0.5
                  L3.9,20.6z M3.9,20.6"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="timenote__main">
          <div className="timenote__title">{title}</div>
          <div className="timenote__progress-bar">

          </div>
          <div className="timenote__target-cycle">1day</div>
          <div className="timenote__time-passed">4 hours 20 min</div>
          <div className="timenote__time-await">1 hour 7min</div>
        </div>

        <div className="timenote__control-dragger">
          E
        </div>
      </section>
    )
  }
}