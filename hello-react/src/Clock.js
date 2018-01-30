import React, { Component } from 'react';

// Composant Stateful
export class Clock extends Component {
  constructor() {
    super();
    this.state = {
      format: 'HH:mm:ss',
      now: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }

  render() {
    return <div>Horloge : {this.state.now.toLocaleTimeString()}</div>;
  }
}