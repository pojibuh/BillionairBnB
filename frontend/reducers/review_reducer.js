import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/booking_actions';
import merge from 'lodash/merge';

const initialState = {};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return 0;
    case RECEIVE_REVIEW:
      return 0;
    default:
      return state;
  }
};
