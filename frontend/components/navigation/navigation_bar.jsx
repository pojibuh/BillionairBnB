import React from 'react';
import { Link } from 'react-router';
import SearchBar from './search_bar';

class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.currentUser;
    if (user) {
      return (
        <nav className="navbar">
          <div className="navbar-left">
            <a href='/#/' id="logo"></a>
          </div>
          <div className="navbar-middle">
            <div className="search-bar-shift">
              <SearchBar />
            </div>
          </div>
          <div className="navbar-right-logged-in">
            <div className="user-greeting">
              <p>Hey, {user.fname} {user.lname}</p>
            </div>
            <div className="logout-button">
              <button onClick={() => this.props.logout()}>
                <div className="navbar-right-hover">
                  Log Out
                </div>
              </button>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar">
          <div className="navbar-left">
            <a href='/#/' id="logo"></a>
          </div>
          <div className="navbar-middle">
            <div className="search-bar-shift">
              <SearchBar />
            </div>
          </div>
          <div className="navbar-right-logged-out">
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
}

export default NavigationBar;
