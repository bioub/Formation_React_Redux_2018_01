import React, { Component } from 'react';
import { Hello } from './Hello';
import { Clock } from './Clock';
import { ButtonCounter } from './ButtonCounter';
import { HelloList } from './HelloList';
import { ContactForm } from './ContactForm';

// Stateless Component
export class App extends Component {

  state = {
    contact: {
      prenom: 'Jean',
      nom: 'Dupont',
    },
  };

  handleNewContact = (contact) => {
    this.setState({
      contact,
    });
  };

  render() {
    return (
      <div>
        <Hello name={this.state.contact.prenom} />
        <hr />
        <Clock />
        <hr />
        <ButtonCounter />
        <hr />
        <HelloList />
        <hr />
        <ContactForm onNewContact={this.handleNewContact} />
      </div>
    );
  }
};