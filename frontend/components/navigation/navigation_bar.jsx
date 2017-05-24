import React from 'react';
import { Link } from 'react-router';
import SearchBarContainer from './search_bar_container';

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
            <a href='/' id="logo"></a>
          </div>
          <div className="navbar-middle">
            <div className="search-bar-shift">
              <SearchBarContainer />
            </div>
          </div>
          <div className="navbar-right-logged-in">
            <div className="user-greeting">
              <p>Hey, {user.fname} {user.lname}</p>
            </div>
            <div className="bookings-link">
              <a href="/bookings" id="book-link">Your Trips</a>
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
            <a href='/' id="logo"></a>
          </div>
          <div className="navbar-middle">
            <div className="search-bar-shift">
              <SearchBarContainer />
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
