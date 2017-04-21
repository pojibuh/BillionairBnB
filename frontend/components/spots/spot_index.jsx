import React from 'react';
import Slider from 'react-slick';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    const spots = Object.values(this.props.spots);
    const SpotIndexItems = spots.map((spot, idx) => {
      return <SpotIndexItem spot={spot} key={idx}/>;
    });
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      draggable: false
    };
    return (
      <div className="outer-carousel">
        <Slider {...settings}>
          <div>
            { SpotIndexItems }
          </div>
        </Slider>
      </div>
    );
  }
}

export default SpotIndex;
