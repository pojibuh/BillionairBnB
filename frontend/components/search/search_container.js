import { connect } from 'react-redux';
import Search from './search';
import { fetchSpots } from '../../actions/spot_actions';

const mapStateToProps = (state) => {
  return {
    spots: state.spots
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpots: () => dispatch(fetchSpots())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
