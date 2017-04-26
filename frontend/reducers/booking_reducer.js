import { RECEIVE_BOOKING, RECEIVE_ERRORS } from '../actions/booking_actions';
import merge from 'lodash/merge';

const initialState = {};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKING:
      const booking = {[action.booking.id]: action.booking};
      return merge({}, state, booking);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      newState = merge({}, state);
      newState.errors = errors;
      return newState;
    default:
      return state;
  }
};
