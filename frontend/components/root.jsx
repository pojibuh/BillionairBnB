import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import SearchContainer from './search/search_container';
import HomepageContainer from './homepage/homepage_container';
import SpotShowContainer from './spots/spot_show_container';
import App from './app';

const Root = ({ store }) => {
  return (
    <Provider store={ store } >
      <Router history={ hashHistory } >
        <Route path='/' component={ App } >
          <IndexRoute component={ HomepageContainer } />
          <Route path='search' component={ SearchContainer } />
          <Route path='spots/:spotId' component={ SpotShowContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
