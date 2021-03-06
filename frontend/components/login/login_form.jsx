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
    if (this.props.errors) {
      const errors = this.props.errors[0];
      return errors;
    }
  }

  componentDidMount() {
    this.props.clear();
  }

  render() {
    return(
      <div className="login-main">
        <ul className="login-errors">
          { this.renderErrors() }
        </ul>
        <br/>
        <button
          className="demo-login"
          onClick={() => this.props.processForm({email: 'moktar@jama.com', password: 'password'}).then(this.props.deactivate('login'))}>
          Demo Login
        </button>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label>
            <input className="login" type="text" onChange={this.linkState('email')} value={this.state.email} placeholder='Email'/>
          </label>

          <label>
            <input className="login" type="password" onChange={this.linkState('password')} value={this.state.password} placeholder='Password'/>
          </label>

          <input className="login-submit" type="submit" value="Log In"/>
        </form>
        <hr className="signup-divider"/>
        <div className="switch-to-signup">
          <p>Don't have an account?</p>
          <button className="switch" onClick={() => this.props.activate('signup')}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
