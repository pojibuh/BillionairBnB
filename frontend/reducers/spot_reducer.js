import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';
const initialState = {};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      const newSpot = {[action.spot.id]: action.spot};
      return merge({}, state, newSpot);
    default:
      return state;
  }
};
