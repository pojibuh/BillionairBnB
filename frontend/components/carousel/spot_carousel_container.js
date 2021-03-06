import { connect } from 'react-redux';
import SpotCarousel from './spot_carousel';
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
)(SpotCarousel);
