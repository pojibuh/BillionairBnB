import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import LoginFormContainer from './login/login_form_container';
import SignupFormContainer from './signup/signup_form_container';
import App from './app';

const Root = ({ store }) => {
  const redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <Route path='/signup' component={ SignupFormContainer } onEnter={ redirectIfLoggedIn } />
          <Route path='/login' component={ LoginFormContainer } onEnter={ redirectIfLoggedIn } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
