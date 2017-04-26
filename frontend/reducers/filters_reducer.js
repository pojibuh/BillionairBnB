import { UPDATE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilter = Object.freeze({
  bounds: {
    northeast: {},
    southwest: {}
  },
  guests: 0,
  startDate: '',
  endDate: ''
});

export default function FiltersReducer(state = _defaultFilter, action) {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      const newFilter = {
        [action.filter]: action.value
      };
      return merge({}, state, newFilter);
    default:
      return state;
  }
}
