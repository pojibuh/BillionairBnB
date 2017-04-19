import React from 'react';
import { Link } from 'react-router';

class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
  }

  //refactor this later so that when the user is logged in, it shows prof pic
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <a href='/#/'>BillionairBnB</a>
        </div>
        <div className="navbar-right">
          <div className="signup">
            <a href='/#/signup'>Sign Up</a>
          </div>
          <div className="login">
            <Link to='/login'>Log In</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
