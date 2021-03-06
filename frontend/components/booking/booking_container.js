import { connect } from 'react-redux';
import Booking from './booking';
import { createBooking, clearErrors } from '../../actions/booking_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.bookings.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: booking => dispatch(createBooking(booking)),
    clear: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
