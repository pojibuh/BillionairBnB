import { connect } from 'react-redux';
import Booking from './booking';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: booking => dispatch(createBooking(booking))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
