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
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      draggable: false
    };
    if (spots.length > 0) {
      return (
        <div className="outer-carousel">
          <div className="inner-carousel">
            <Slider {...settings} >
                {spots.map((spot, idx) => {
                  return <div key={idx}><SpotIndexItem spot={spot} key={idx}/></div>;
                })
              }
            </Slider>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default SpotIndex;
