import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.currentUser;
    if (user) {
      return (
        <div>
          <h2>Hey, {`${user.fname} ${user.lname}`}!</h2>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <br />
          <Link to='/login'>Log In</Link>
        </div>
      );
    }
  }
}

export default Greeting;
