import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'Tyler'
    }
  }
  
  render() {
    return (
      <p>
        Username: {this.props.username}
      </p>
    )
  }
}

export default User;
