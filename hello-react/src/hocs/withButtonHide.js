import React, { Component } from 'react';

export const withButtonHide = (WrappedComponent) => {
  class Hideable extends Component {
    state = {
      hide: false,
    };

    handleClick = () => {
      this.setState({
        hide: !this.state.hide,
      });
    };

    render() {
      return <div>
        <button onClick={this.handleClick}>{this.state.hide ? 'Show' : 'Hide'}</button>
        {!this.state.hide && <WrappedComponent {...this.props} />}
      </div>
    }
  };

  return Hideable;
}