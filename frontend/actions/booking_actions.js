import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
  errors: []
});

export const fetchBookings = () => dispatch => {
  return BookingApiUtil.fetchBookings()
    .then(bookings => dispatch(receiveBookings(bookings)));
};

export const createBooking = booking => dispatch => {
  return BookingApiUtil.createBooking(booking)
  .then(booking => dispatch(receiveBooking(booking)), err => dispatch(receiveErrors(err.responseJSON)));
};
