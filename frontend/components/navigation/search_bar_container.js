import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    startDate: '',
    endDate: ''
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
