import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.TimerID = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.TimerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <>
        <h2>Sekarang jam {this.state.date.toLocaleTimeString()}.</h2>
      </>
    );
  }
}

export default Clock;
