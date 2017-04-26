import React from 'react';
import { Link } from 'react-router';
import BookingContainer from '../booking/booking_container';

class SpotShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.params.spotId);
  }

  render() {
    const spot = this.props.spot;
    if (spot && spot.owner) {
      const owner = spot.owner;
      return (
        <div className="spot-show-page">
          <div className="spot-image">
            <img src={spot.image_url} />
          </div>
          <div className="spot-information">
            <div className="spot-details">
              <div className="spot-owner-description">
                { spot.description }
                <p> { spot.location } </p>
                <p> { owner.fname } { owner.lname } </p>
              </div>
              <div className="spot-rules">
                rules go here
              </div>
              <div className="spot-reviews">
                reviews go here
              </div>
            </div>
            <div className="spot-booking">
              <BookingContainer />
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
