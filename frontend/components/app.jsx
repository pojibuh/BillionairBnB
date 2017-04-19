import React from 'react';
import NavigationBarContainer from './navigation/navigation_bar_container';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <NavigationBarContainer />
    <GreetingContainer />
    { children }
  </div>
);

export default App;
