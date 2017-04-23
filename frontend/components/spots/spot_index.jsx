import React from 'react';
import Slider from 'react-slick';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const spots = Object.values(this.props.spots);
    let allSpots = spots.map((spot, idx) => {
      return <div key={idx}><SpotIndexItem spot={spot} key={idx}/></div>;
    });
    if (spots.length > 0) {
      return (
        <div className="all-spots">
          { allSpots }
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default SpotIndex;
