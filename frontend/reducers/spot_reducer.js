import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spot_actions';

const initialState = {};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      return action.spot;
    default:
      return state;
  }
};
