export const RECEIVE_COMPONENT = "RECEIVE_COMPONENT";
export const ACTIVATE_MODAL = "ACTIVATE_MODAL";

export const receiveComponent = (modalType) => ({
  type: RECEIVE_COMPONENT,
  modalType
});

export const activateModal = (modalType) => ({
  type: ACTIVATE_MODAL,
  modalType
});
