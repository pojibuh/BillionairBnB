import { connect } from 'react-redux';
import Search from './search';
import { fetchSpots } from '../../actions/spot_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => {
  return {
    spots: state.spots,
    bounds: state.filters.bounds,
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    updateFilter: (filters) => dispatch(updateFilter(filters))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
