import React from 'react';
import NavigationBarContainer from './navigation/navigation_bar_container';
import ModalContainer from './modal/modal_container';
import Footer from './footer/footer';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ModalContainer />
        <NavigationBarContainer />
        <div> { this.props.children } </div>
        <Footer />
      </div>
    )
  }
}

export default App;
