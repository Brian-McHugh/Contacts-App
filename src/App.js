import React from 'react';
import ContactList from './components/ContactList';
import User from './components/User';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      contacts: [
        {
          "id": "karen",
          "name": "Karen Isgrigg",
          "handle": "@karen_isgrigg",
          "avatarURL": "../images/karen.jpg"
        },
        {
          "id": "richard",
          "name": "Richard Kalehoff",
          "handle": "@richardkalehoff",
          "avatarURL": "../images/richard.jpg"
        },
        {
          "id": "tyler",
          "name": "Tyler McGinnis",
          "handle": "@tylermcginnis",
          "avatarURL": "../images/tyler.jpg"
        }
      ]
    }

    this.removeContact = this.removeContact.bind(this);
  }

  removeContact(contact) {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        // return contacts that don't match the id of the one we want removed
        return c.id !== contact.id;
      })
    }))
  }

  render() {
    
    return (
      <div>
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
