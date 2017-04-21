export const fetchSpots = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/spots',
    error: (err) => console.log(err)
  });
};
