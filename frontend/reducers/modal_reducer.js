import { RECEIVE_COMPONENT, ACTIVATE_MODAL } from '../actions/modal_actions';

const initialState = {
    isOpen: false,
    modalType: ''
};

export default function ModalReducer(state = initialState, action) {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_COMPONENT:
      let modalType = action.modalType;
      return Object.assign({}, state, { modalType });
    case ACTIVATE_MODAL:
    let activatedModalType = action.modalType;
      return Object.assign({}, state, {modalType: activatedModalType, isOpen: true});
    default:
      return state;
  }
}
