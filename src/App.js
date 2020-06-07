import React from 'react';
import ContactList from './components/ContactList';

class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <ContactList contacts={[
          {name: 'Tyler'},
          {name: 'Kim'},
          {name: 'Richard'}
        ]}/>
        <ContactList contacts={[
          {name: 'Jim'},
          {name: 'Allison'},
          {name: 'Natalie'}
        ]}/>
      </div>
    );
  }
}

export default App;
