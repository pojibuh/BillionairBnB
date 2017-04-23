import { UPDATE_FILTER } from '../actions/filter_actions';

const _defaultFilters = Object.freeze({
  bounds: {},
});

export default function FiltersReducer(state = _defaultFilters, action) {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      const newFilter = {
        [action.filter]: action.value
      };
      return Object.assign({}, state, newFilter);
    default:
      return state;
  }
}
