import React from 'react';
import { Link } from 'react-router';

class SpotShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.params.spotId);
  }

  render() {
    const spot = this.props.spot;
    if (spot) {
      return (
        <div>
          <div className="spot-image">
            <img src={spot.image_url} />
          </div>
          <div className="spot-details">
            <div>
              { spot.description }
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default SpotShow;
