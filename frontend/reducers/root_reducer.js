import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import SpotReducer from './spot_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modals: ModalReducer,
  spots: SpotReducer
});

export default RootReducer;
