import React, { Component } from 'react';

const clockTile = {
  color: 'white',
  textAlign: 'center',
};

const clockSpan = {
  padding: '4px',
};

let runner;

class Clock extends Component {
  constructor(props) {
    super(props);
    const time = new Date().toLocaleTimeString('en-UK', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    this.state = {
      time,
    };
  }

  componentDidMount() {
    runner = setInterval(() => {
      const time = new Date().toLocaleTimeString('en-UK', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      this.setState({ time });
    }, 500);
  }

  componentWillUnmount() {
    if (runner) {
      clearInterval(runner);
    }
  }

  render() {
    const { time } = this.state;
    return (
      <div style={clockTile}>
        <span style={clockSpan}>{time}</span>
      </div>
    );
  }
}

export default Clock;
