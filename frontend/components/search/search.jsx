import React from 'react';
import SpotIndex from '../spots/spot_index';
import Map from '../map/map';

class Search extends React.Component {

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    return(
      <div>
        <Map spots={this.props.spots}/>
        <SpotIndex spots={this.props.spots}/>
      </div>
    );
  }
}

export default Search;
