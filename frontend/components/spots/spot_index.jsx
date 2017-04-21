import React from 'react';
import { Link } from 'react-router';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    const spots = Object.values(this.props.spots);
    const SpotIndexItems = spots.map((spot) => {
      return <SpotIndexItem spot={spot}/>;
    });
    return (
      <ul>
        { SpotIndexItems }
      </ul>
    );
  }
}

export default SpotIndex;
