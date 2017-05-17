import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/booking_actions';
import merge from 'lodash/merge';

const initialState = {
  errors: []
};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      const booking = {[action.booking.id]: action.booking};
      return merge({}, state, booking);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      let newState = merge({}, state);
      newState.errors = errors;
      return newState;
    case CLEAR_ERRORS:
      let noErrors = action.errors;
      return Object.assign({}, state, { errors: noErrors });
    default:
      return state;
  }
};
