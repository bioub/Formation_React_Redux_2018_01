import React, { Component } from 'react';
import './ButtonCounter.css';
import { withButtonHide } from '../hocs/withButtonHide';

// Composant Stateful
export class ButtonCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    let pairOuImpair;

    if (this.state.count % 2) {
      pairOuImpair = <span>Impair</span>;
    }
    else {
      pairOuImpair = <span>Pair</span>;
    }

    const styles = {
      backgroundColor: (this.state.count % 2) ? 'red' : 'green',
    };

    return (

      <button className="ButtonCounter" style={styles} onClick={this.clickHandler}>
        {this.state.count}
        {pairOuImpair}
        {this.state.count % 2 ? <span>Impair</span> : <span>Pair</span>}
        {this.state.count % 2 && <span>Impair</span>}
      </button>
    );
  }
}

export const ButtonCounterHideable = withButtonHide(ButtonCounter);