import * as APIUtil from '../util/spot_api_util';
import { fetchSpots } from './spot_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const updateFilter = (filters) => (dispatch, getState) => {
  filters.forEach((filterAttrs) => {
    let filter = filterAttrs[0];
    let value = filterAttrs[1];
    dispatch(changeFilter(filter, value));
  });
  return fetchSpots(getState().filters)(dispatch);
};

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const clearFilter = () => ({
  type: CLEAR_FILTER
});
