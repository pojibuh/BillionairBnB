import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import SearchContainer from './search/search_container';
import HomepageContainer from './homepage/homepage_container';
import SpotShowContainer from './spots/spot_show_container';
import BookingIndexContainer from './booking/booking_index_container';
import App from './app';

const Root = ({ store }) => {

  const redirectIfLoggedOut = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/');
    }
  };
  
  return (
    <Provider store={ store } >
      <Router onUpdate={() => window.scrollTo(0, 0)} history={ browserHistory } >
        <Route path='/' component={ App } >
          <IndexRoute component={ HomepageContainer } />
          <Route path='/search' component={ SearchContainer } />
          <Route path='/spots/:spotId' component={ SpotShowContainer } />
          <Route path='/bookings' component={ BookingIndexContainer } onEnter={ redirectIfLoggedOut }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
