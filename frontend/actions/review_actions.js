import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const fetchReviews = () => dispatch => {
  return ReviewApiUtil.fetchReviews()
    .then(reviews => dispatch(receiveReviews(reviews)));
};

export const createReview = review => dispatch => {
  return ReviewApiUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)));
};
