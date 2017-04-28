import React from 'react';
import { Link } from 'react-router';
import BookingContainer from '../booking/booking_container';
import ReviewIndexContainer from '../review/review_index_container';
import ReviewFormContainer from '../review/review_form_container';
import Footer from '../footer/footer';

class SpotShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.params.spotId);
  }

  render() {
    //make sure to add footer here as well
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
                <h4 className="rules-header">House Rules</h4>
                <p className="rules">{ spot.rules }</p>
              </div>
              <div className="spot-reviews">
                <ReviewIndexContainer spot={spot}/>
                <ReviewFormContainer spot={spot}/>
              </div>
            </div>
            <div className="spot-booking">
              <BookingContainer spot={spot}/>
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
