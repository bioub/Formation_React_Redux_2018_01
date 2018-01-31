import React, { Component } from 'react';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

class App extends Component {

  state = {
    items: ['Acheter du pain', 'Parler de redux'],
  };

  handleNewTodo = (todo) => {
    this.setState({
      items: [todo, ...this.state.items],
    });
  };


  render() {
    return (
      <div className="App">
        <h2>TodoList</h2>
        <TodoForm onNewTodo={this.handleNewTodo}/>
        <TodoList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
