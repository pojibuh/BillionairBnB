import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ModalContainer from './modal/modal_container';
import SearchContainer from './search/search_container';
import App from './app';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }/>
        <Route path='/spots' component={ SearchContainer } />
      </Router>
    </Provider>
  );
};

export default Root;
