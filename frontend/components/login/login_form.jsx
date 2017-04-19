import React from 'react';
import { withRouter } from 'react-router';

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
    this.props.processForm(user).then(() => this.props.deactivate('login'));
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

  componentDidMount() {
    this.props.clear();
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
        <form className="login" onSubmit={this.handleSubmit}>
          <label>
            <input type="text" onChange={this.linkState('email')} value={this.state.email} placeholder='Email'/>
          </label>
          <label>
            <input type="password" onChange={this.linkState('password')} value={this.state.password} placeholder='Password'/>
          </label>
          <input type="submit" value="Log In"/>
        </form>
        <button onClick={() => this.props.activate('signup')}>Don't have an account? Sign Up!</button>
      </div>
    );
  }
}

export default withRouter(LoginForm);
