import React from 'react';
import NavigationBarContainer from './navigation/navigation_bar_container';
import GreetingContainer from './greeting/greeting_container';
import ModalContainer from './modal/modal_container';

const App = ({ children }) => (
  <div>
    <ModalContainer />
    <NavigationBarContainer />
    <GreetingContainer />
    { children }
  </div>
);

export default App;
