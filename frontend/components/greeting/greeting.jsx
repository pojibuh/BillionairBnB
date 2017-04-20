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
        <div className="greeting-1">
          <div className="greeting-2">
            <div className="greeting-3">
              <h1 className="greeting-text-1">Where next?</h1>&nbsp;
              <h1 className="greeting-text-2">Live the good life</h1>
              <h1 className="greeting-text-2">with BillionairBnB</h1>
            </div>
          </div>
        </div>
      );
    }
  }
}

// <label className="greeting-text-1">
//   Where next?<h1 className="greeting-text-2"> Live the good life with BillionairBnB</h1>
// </label>

export default Greeting;
