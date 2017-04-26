import React from 'react';

class Booking extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  render() {
    return(
      <div></div>
    );
  }

}

export default Booking;
