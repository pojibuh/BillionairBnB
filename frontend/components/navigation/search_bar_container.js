import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { logout } from '../../actions/session_actions';
import { updateFilter } from '../../actions/filter_actions';
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
    updateFilter: (filters) => dispatch(updateFilter(filters))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
