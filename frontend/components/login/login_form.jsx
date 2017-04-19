import React from 'react';
import { Link, withRouter } from 'react-router';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
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
    if (this.props.errors) {
      const errors = this.props.errors.map(err => <li>{err}</li>);
    }
  }

  render() {
    const action = 'session';
    return(
      <div>
        <ul>
          { this.renderErrors() }
        </ul>
        <h2>Log In</h2>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input type="text" onChange={this.linkState('email')} value={this.state.email}/>
          </label>
          <label>Password
            <input type="password" onChange={this.linkState('password')} value={this.state.password}/>
          </label>
          <input type="submit" value="Log In"/>
        </form>
        <Link to='/signup'>Don't have an account? Sign Up!</Link>
      </div>
    );
  }
}

export default withRouter(LoginForm);
