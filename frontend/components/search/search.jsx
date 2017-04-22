import React from 'react';
import SpotIndex from '../spots/spot_index';
import NavigationBar from '../navigation/navigation_bar';
import Map from '../map/map';

class Search extends React.Component {

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    return(
      <div>
        <div className="search-page">
          <Map spots={this.props.spots}/>
          <SpotIndex spots={this.props.spots}/>
        </div>
      </div>
    );
  }
}

export default Search;
