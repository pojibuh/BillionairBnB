import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spot_actions';
import SpotShow from './spot_show';

const mapStateToProps = (state, { params }) => {
  const spotId = parseInt(params.spotId);
  return {
    spotId,
    spot: state.spot
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSpot: id => dispatch(fetchSpot(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
