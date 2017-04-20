import React from 'react';
import { withRouter } from 'react-router';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
      fname: "",
      lname: "",
			password: ""
		};
    this.errors = {
      email: "",
      fname: "",
      lname: "",
			password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.deactivate('signup'));
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  componentDidMount() {
    this.props.clear();
  }
  
  filterErrors() {
    Object.assign(this.errors, this.props.errors);
  }

  render() {
    return(
      <div className="signup-main">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <label>
            <input className="signup" type="text" onChange={this.linkState('email')} value={this.state.email} placeholder='Email Address'/>
          </label>
          { this.errors.email }
          <label>
            <input className="signup" type="text" onChange={this.linkState('fname')} value={this.state.fname} placeholder='First Name'/>
          </label>
          { this.errors.fname }
          <label>
            <input className="signup" type="text" onChange={this.linkState('lname')} value={this.state.lname} placeholder='Last Name'/>
          </label>
          { this.errors.lname }
          <label>
            <input className="signup" type="password" onChange={this.linkState('password')} value={this.state.password} placeholder='Create a Password'/>
          </label>
          { this.errors.password }
          <input className="signup-submit" type="submit" value="Sign Up"/>
        </form>
        <br/>
        <div className="switch-to-login">
          <p>Already have a BillionairBnB account?</p>
          <button className="switch" onClick={() => this.props.activate('login')}>Log In</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
