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

  componentDidMount() {
    this.props.clear();
  }

  emailErrors() {
    let emailErrors = "";
    if (this.props.errors.email) {
      emailErrors = this.props.errors.email;
      emailErrors = emailErrors.map(err => {
        return (<li>{`Email ${err}`}</li>);
      });
    }
    return emailErrors;
  }

  fnameErrors() {
    let fnameErrors = '';
    if (this.props.errors.fname) {
      fnameErrors = this.props.errors.fname;
      fnameErrors = fnameErrors.map(err => {
        return (<li>{`First Name ${err}`}</li>);
      });
    }
    return fnameErrors;
  }

  lnameErrors() {
    let lnameErrors = '';
    if (this.props.errors.lname) {
      lnameErrors = this.props.errors.lname;
      lnameErrors = lnameErrors.map(err => {
        return (<li>{`Last Name ${err}`}</li>);
      });
    }
    return lnameErrors;
  }

  passwordErrors() {
    let passwordErrors = '';
    if (this.props.errors.password) {
      passwordErrors = this.props.errors.password;
      passwordErrors = passwordErrors.map(err => {
        return (<li>{`Password ${err}`}</li>);
      });
    }
    return passwordErrors;
  }

  render() {
    return(
      <div className="signup-main">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <label>
            <input className="signup" type="text" onChange={this.linkState('email')} value={this.state.email} placeholder='Email Address'/>
          </label>
          <ul className="signup-errors">
            { this.emailErrors() }
          </ul>
          <label>
            <input className="signup" type="text" onChange={this.linkState('fname')} value={this.state.fname} placeholder='First Name'/>
          </label>
          <ul className="signup-errors">
            { this.fnameErrors() }
          </ul>
          <label>
            <input className="signup" type="text" onChange={this.linkState('lname')} value={this.state.lname} placeholder='Last Name'/>
          </label>
          <ul className="signup-errors">
            { this.lnameErrors() }
          </ul>
          <label>
            <input className="signup" type="password" onChange={this.linkState('password')} value={this.state.password} placeholder='Create a Password'/>
          </label>
          <ul className="signup-password-errors">
            { this.passwordErrors() }
          </ul>
          <input className="signup-submit" type="submit" value="Sign Up"/>
        </form>
        <hr className="signup-divider"/>
        <div className="switch-to-login">
          <p>Already have a BillionairBnB account?</p>
          <button className="switch" onClick={() => this.props.activate('login')}>Log In</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
