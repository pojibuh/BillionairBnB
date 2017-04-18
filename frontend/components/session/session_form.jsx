import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
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

  render() {
    const address = this.props.formType === 'signup' ? '/login' : '/signup';
    const action = this.props.formType === 'signup' ? 'users' : 'session';
    const errors = this.props.errors.map(err => <li>{err}</li>);
    return(
      <div>
        <ul>
          {errors}
        </ul>
        <h2>{this.props.formType}</h2>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input type="text" onChange={this.linkState('email')} value={this.state.email}/>
          </label>
          <label>Password
            <input type="password" onChange={this.linkState('password')} value={this.state.password}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <Link to={address}>{address.slice(1)}</Link>
      </div>
    );
  }
}

export default withRouter(SessionForm);
