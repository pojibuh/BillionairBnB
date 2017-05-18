import React from 'react';

class BookingIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const booking = this.props.booking;
    return (
      <div className="individual-spot">
        <div className="review-top-half">
          <div className="review-user">
            here is { booking.start_date }
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
  }
}

export default BookingIndexItem;
