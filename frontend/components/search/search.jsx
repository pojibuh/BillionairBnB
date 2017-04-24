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
        <div className="search-page">
          <Map spots={this.props.spots}
            updateBounds={this.props.updateBounds}
            bounds={this.props.bounds}/>
          <div className="search-spots">
            <SpotIndex spots={this.props.spots}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
