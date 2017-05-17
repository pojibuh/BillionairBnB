export const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review }
  });
};

export const fetchReviews = (data) => {
  return $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: data
  });
};
