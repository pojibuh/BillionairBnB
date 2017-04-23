import { connect } from 'react-redux';
import Search from './search';
import { fetchSpots } from '../../actions/spot_actions';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = (state) => {
  return {
    spots: state.spots
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    updateBounds: () => dispatch(updateBounds())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
