import React from 'react';
import ContactList from './components/ContactList';
import User from './components/User';

const contacts = [
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
];

class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <ContactList contacts={contacts}/>
      </div>
    );
  }
}

export default App;
