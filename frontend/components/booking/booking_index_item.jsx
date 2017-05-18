import React from 'react';

class BookingIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const booking = this.props.booking;
    debugger
    return (
      <div className="individual-review">
        <div className="review-top-half">
          <div className="review-user">
          { booking.spot.location }
          </div>
          <div className="review-rating">
            Start Date: { booking.start_date }
          </div>
        </div>
        <div className="review-bottom-half">
          { booking.spot.description }
        </div>
      </div>
    );
  }
}

export default BookingIndexItem;
