import React from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    const bookings = Object.values(this.props.bookings);
    if(bookings.length > 0) {
      let allBookings = bookings.map((booking, idx) => {
        return <div key={idx}><BookingIndexItem booking={booking} key={idx}/></div>;
      });
      return (
        <div className="all-bookinga">
          { allBookings }
        </div>
      );
    } else {
      return (<div>You have not made any bookings yet</div>);
    }
  }
}

export default BookingIndex;
