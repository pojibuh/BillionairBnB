import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import SpotCarouselContainer from '../carousel/spot_carousel_container';

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <GreetingContainer />
        <SpotCarouselContainer />
      </div>
    );
  }
}

export default Homepage;
