import React from 'react';
import NavigationBarContainer from './navigation/navigation_bar_container';
import ModalContainer from './modal/modal_container';

const App = ({ children }) => (
  <div>
    <ModalContainer />
    <NavigationBarContainer />
    { children }
  </div>
);

export default App;
