import { connect } from 'react-redux';
import Modal from './modal';
import { receiveComponent, deactivateModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    isOpen: state.modals.isOpen,
    modalType: state.modals.modalType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveComponent: (modalType) => dispatch(receiveComponent(modalType)),
    deactivateModal: (modalType) => dispatch(deactivateModal(modalType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
