import * as SpotApiUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";

export const receiveSpots = (spots) => {
  return {
    type: RECEIVE_SPOTS,
    spots
  };
};

export const receiveSpot = (spot) => {
  return {
    type: RECEIVE_SPOT,
    spot
  };
};

export const fetchSpots = (filters) => dispatch => {
  return SpotApiUtil.fetchSpots(filters)
    .then((spots) => dispatch(receiveSpots(spots)));
};

export const fetchSpot = id => dispatch => (
  SpotApiUtil.fetchSpot(id)
    .then(spot => dispatch(receiveSpot(spot)))
);
