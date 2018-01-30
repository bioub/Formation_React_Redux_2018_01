import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    prenom: '',
    nom: '',
  };

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onNewContact(this.state);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          Prénom <input name="prenom" onInput={this.inputHandler} value={this.state.prenom} />
        </div>
        <div>
          Nom <input name="nom" onInput={this.inputHandler} value={this.state.nom} />
        </div>
        <button>+</button>
      </form>
    );
  }
}