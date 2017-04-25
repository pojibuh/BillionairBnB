export const fetchSpots = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/spots',
    data: data
  });
};

export const fetchSpot = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/spots/${id}`,
  });
};
