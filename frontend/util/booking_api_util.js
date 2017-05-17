export const createBooking = (booking) => {
  return $.ajax({
    method: 'POST',
    url: '/api/bookings',
    data: { booking }
  });
};

export const fetchBookings = (data) => {
  return $.ajax({
    method: 'GET',
    url: '/api/bookings',
    data: data
  });
};
