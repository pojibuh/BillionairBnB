import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';
import SpotIndexItem from '../spots/spot_index_item';

class SpotCarousel extends React.Component {

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
      const featuredSpots = spots.slice(0, 6);
      const otherSpots = spots.slice(6, spots.length);
      if (featuredSpots.length === 6 && otherSpots.length === (spots.length - featuredSpots.length)) {
        return (
          <div className="outer-carousel">
            <div className="featured-homes-carousel">
              <div className="carousel-header">
                <div className="carousel-header-title">
                  Featured Homes
                </div>
                <div className="searchlink">
                  <Link to='/search' className="spots-link">See Map</Link>
                </div>
              </div>
              <div className="inner-carousel">
                <Slider {...settings} >
                    {featuredSpots.map((spot, idx) => {
                      return <div key={idx}><SpotIndexItem spot={spot} key={idx}/></div>;
                    })
                  }
                </Slider>
              </div>
            </div>
            <div className="other-homes-carousel">
              <div className="carousel-header">
                <div className="carousel-header-title">
                  More Homes
                </div>
                <div className="searchlink">
                  <Link to='/search' className="spots-link">See Map</Link>
                </div>
              </div>
              <div className="inner-carousel">
                <Slider {...settings} >
                    {otherSpots.map((spot, idx) => {
                      return <div key={idx}><SpotIndexItem spot={spot} key={idx}/></div>;
                    })
                  }
                </Slider>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div></div>
        );
      }
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default SpotCarousel;
