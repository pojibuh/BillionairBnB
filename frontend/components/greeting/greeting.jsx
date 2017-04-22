import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
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

export default Greeting;
