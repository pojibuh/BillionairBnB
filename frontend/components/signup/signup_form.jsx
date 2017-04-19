import React from 'react';
import { Link, withRouter } from 'react-router';

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
    this.props.processForm(user).then(() => this.redirect());
  }

  redirect() {
    this.props.router.push('/');
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  renderErrors() {
    if (this.props.errors.errors) {
      const errors = this.props.errors.errors.map(err => <li>{err}</li>);
      return errors;
    }
  }

  render() {
    const action = 'users';
    return(
      <div>
        <ul>
          { this.renderErrors() }
        </ul>
        <h2>Sign Up</h2>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input type="text" onChange={this.linkState('email')} value={this.state.email}/>
          </label>

          <label>First Name
            <input type="text" onChange={this.linkState('fname')} value={this.state.fname}/>
          </label>

          <label>Last Name
            <input type="text" onChange={this.linkState('lname')} value={this.state.lname}/>
          </label>

          <label>Create a Password
            <input type="password" onChange={this.linkState('password')} value={this.state.password}/>
          </label>
          <input type="submit" value="Sign Up"/>
        </form>
        <Link to='/login'>Already have an account? Log In!</Link>
      </div>
    );
  }
}

export default withRouter(SignupForm);
