import React from 'react';

class BookingIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const booking = this.props.booking;
    const spot = booking.spot;
    if (spot) {
      return (
        <div className="individual-spot">
        <h2></h2>
          <div className="review-top-half">
            <div className="review-user">
              { spot.description }
            </div>
            <div className="review-rating">
              <img src={spot.image_url} />
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
