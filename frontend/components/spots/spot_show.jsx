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
        <div className="spot-show-page">
          <div className="spot-image">
            <img src={spot.image_url} />
          </div>
          <div className="spot-information">
            <div className="spot-details">
              { spot.description }&nbsp;
              { spot.location }
            </div>
            <div className="spot-booking">
              bookings go here
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
