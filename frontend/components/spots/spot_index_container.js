import { connect } from 'react-redux';
import SpotIndex from './spot_index';
import { fetchSpots } from '../../actions/spot_actions';

const mapStateToProps = (state) => {
  return {
    spots: state.spots
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpots: (filters) => dispatch(fetchSpots(filters))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotIndex);
