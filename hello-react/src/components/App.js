import React, { Component } from 'react';
import { Hello } from './Hello';
import { Clock } from './Clock';
import { ButtonCounter, ButtonCounterHideable } from './ButtonCounter';
import { HelloList } from './HelloList';
import { ContactForm } from './ContactForm';
import { ConnectedButtonCounterHideable } from '../containers/ConnectedButtonCounter';

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
        <Hello name="Jean (static)" />
        <hr />
        <Hello name={this.state.contact.prenom} />
        <hr />
        <Clock />
        <hr />
        <ButtonCounter />
        <hr />
        <HelloList />
        <hr />
        <ContactForm onNewContact={this.handleNewContact} />
        <hr />
        <ButtonCounterHideable />
        <hr />
        <ConnectedButtonCounterHideable index={0} />
        <hr />
        <ConnectedButtonCounterHideable index={1} />
      </div>
    );
  }
};