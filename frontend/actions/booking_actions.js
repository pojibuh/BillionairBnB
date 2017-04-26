import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  booking
});

export const createBooking = booking => dispatch => {
  return BookingApiUtil.createBooking(booking)
  .then(booking => dispatch(receiveBooking(booking)), err => dispatch(receiveErrors(err.responseJSON)));
};
