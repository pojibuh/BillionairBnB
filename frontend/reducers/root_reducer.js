import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import SpotReducer from './spot_reducer';
import FiltersReducer from './filters_reducer';
import BookingReducer from './booking_reducer';
import ReviewReducer from './review_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modals: ModalReducer,
  spots: SpotReducer,
  filters: FiltersReducer,
  bookings: BookingReducer,
  reviews: ReviewReducer
});

export default RootReducer;
