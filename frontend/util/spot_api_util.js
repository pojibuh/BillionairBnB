export const fetchSpots = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/spots',
    error: (err) => console.log(err),
    data
  });
};
