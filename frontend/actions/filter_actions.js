import * as APIUtil from '../util/spot_api_util';
import { fetchSpots } from './spot_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = (bounds) => (dispatch, getState) => {
  dispatch(changeBounds(bounds));
  return fetchSpots(getState().filters)(dispatch);
};

export const changeBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});
