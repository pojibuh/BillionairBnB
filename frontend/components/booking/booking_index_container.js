import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchBookings } from '../../actions/booking_actions';

const mapStateToProps = state => {
  return {
    bookings: state.bookings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: () => dispatch(fetchBookings())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingIndex);
