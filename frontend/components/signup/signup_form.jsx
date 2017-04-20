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

  renderErrors() {
    if (this.props.errors) {
      const errors = this.props.errors.map(err => <li>{err}</li>);
      return errors;
    }
  }

  componentDidMount() {
    this.props.clear();
  }

  render() {
    const action = 'users';
    return(
      <div className="signup-main">
        <ul className="signup-errors">
          { this.renderErrors() }
        </ul>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <label>
            <input className="signup" type="text" onChange={this.linkState('email')} value={this.state.email} placeholder='Email Address'/>
          </label>
          
          <label>
            <input className="signup" type="text" onChange={this.linkState('fname')} value={this.state.fname} placeholder='First Name'/>
          </label>
          
          <label>
            <input className="signup" type="text" onChange={this.linkState('lname')} value={this.state.lname} placeholder='Last Name'/>
          </label>
          
          <label>
            <input className="signup" type="password" onChange={this.linkState('password')} value={this.state.password} placeholder='Create a Password'/>
          </label>
          
          <input className="signup-submit" type="submit" value="Sign Up"/>
        </form>
        <br/>
        <button className="switch-to-login" onClick={() => this.props.activate('login')}>Already have a BillionairBnB account? Log In</button>
      </div>
    );
  }
}

export default withRouter(SignupForm);
