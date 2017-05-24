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
          <div className="spot-desc">
            { spot.location }
          </div>
          <div className="spot-image">
            <img src={spot.image_url} />
          </div>
          <div className="booking-range">
            { booking.start_date } to { booking.end_date }
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default BookingIndexItem;
