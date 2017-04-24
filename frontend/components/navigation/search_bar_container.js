import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { logout } from '../../actions/session_actions';
import { updateBounds } from '../../actions/filter_actions';
import { moment } from 'moment';

const mapStateToProps = (state) => {
  return {
    startDate: '',
    endDate: ''
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
