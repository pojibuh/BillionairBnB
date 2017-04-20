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
          <div className="signup-button">
            <button onClick={() => this.props.activateModal('signup')}>
              <div className="navbar-right-hover">
                Sign Up
              </div>
            </button>
          </div>
          <div className="login-button">
            <button onClick={() => this.props.activateModal('login')}>
              <div className="navbar-right-hover">
                Log In
              </div>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
