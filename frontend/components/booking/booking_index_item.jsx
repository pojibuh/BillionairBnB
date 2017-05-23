import React from 'react';

class BookingIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const booking = this.props.booking;
    const spot = booking.spot;
    debugger
    if (spot) {
      return (
        <div className="individual-spot">
          <div className="review-top-half">
            <div className="review-user">
              here is { booking.spot.description }
            </div>
            <div className="review-rating">
              Start Date: swag
            </div>
          </div>
          <div className="review-bottom-half">
            and { booking.end_date }
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default BookingIndexItem;
