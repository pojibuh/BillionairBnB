import React from 'react';
import NavigationBarContainer from './navigation/navigation_bar_container';
import ModalContainer from './modal/modal_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div>
    <ModalContainer />
    <NavigationBarContainer />
    { children }
    <Footer />
  </div>
);

export default App;
