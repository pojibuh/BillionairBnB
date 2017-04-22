import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import SearchContainer from './search/search_container';
import HomepageContainer from './homepage/homepage_container';
import App from './app';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ HomepageContainer } />
          <Route path='/spots' component={ SearchContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
