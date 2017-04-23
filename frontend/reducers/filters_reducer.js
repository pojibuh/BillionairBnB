import { UPDATE_BOUNDS } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultBounds = Object.freeze({
  bounds: {},
});

export default function FiltersReducer(state = _defaultBounds, action) {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_BOUNDS:
      const newBound = {
        bounds: action.bounds
      };
      return merge({}, state, newBound);
    default:
      return state;
  }
}
