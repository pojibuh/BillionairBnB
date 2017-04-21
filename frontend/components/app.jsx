import React from 'react';
import NavigationBarContainer from './navigation/navigation_bar_container';
import GreetingContainer from './greeting/greeting_container';
import ModalContainer from './modal/modal_container';
import SpotIndexContainer from './spots/spot_index_container';

const App = ({ children }) => (
  <div>
    <ModalContainer />
    <NavigationBarContainer />
    <GreetingContainer />
    <SpotIndexContainer />
    { children }
  </div>
);

export default App;
