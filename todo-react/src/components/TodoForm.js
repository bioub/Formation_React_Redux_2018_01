import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoForm extends Component {
  static propTypes = {
    onNewTodo: PropTypes.func,
  };

  state = {
    value: '',
  };

  handleInput = (event) => {
    this.setState({
      value: event.target.value,
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNewTodo(this.state.value);
  };

  render() {
    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <div>
          Todo :
          <input onInput={this.handleInput} value={this.state.value}/>
          <button>+</button>
        </div>
      </form>
    );
  }
}