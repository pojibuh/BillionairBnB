import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import LoginFormContainer from './login/login_form_container';
import SignupFormContainer from './signup/signup_form_container';
import App from './app';

const Root = ({ store }) => {
  let action;
  if (store.getState().login) {
    action = store.getState().login;
  } else {
    action = store.getState().signup;
  }

  const redirectIfLoggedIn = (nextState, replace) => {
    if (action.currentUser) {
      replace('/');
    }
  };
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <Route path='/login' component={ LoginFormContainer } onEnter={ redirectIfLoggedIn } />
          <Route path='/signup' component={ SignupFormContainer } onEnter={ redirectIfLoggedIn } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
