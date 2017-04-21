import React from 'react';
import { Link } from 'react-router';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {

  constructor(props) {
    super(props);
    this.slider = 0;
    this.shiftLeft = this.shiftLeft.bind(this);
    this.shiftRight = this.shiftRight.bind(this);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  shiftLeft() {
    if (this.slider !== 0) {
      return this.slider -= 20;
    }
  }

  shiftRight() {
    debugger
    if (this.slider < 40) {
      return this.slider += 20;
    }
    debugger
  }

  render() {
    const spots = Object.values(this.props.spots);
    let slider = this.slider;
    const SpotIndexItems = spots.map((spot, idx) => {
      return <SpotIndexItem spot={spot} key={idx}/>;
    });
    const shift = {transform: `translateX(${slider})%`};
    return (
      <div className="outer-carousel">
        <button className="shift-left" onClick={() => this.shiftLeft()}>
          <img className="left-button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Chevron-down%2C_Web_Fundamentals.svg/2000px-Chevron-down%2C_Web_Fundamentals.svg.png"/>
        </button>
        <div className="carousel" style={shift}>
          { SpotIndexItems }
        </div>
        <button className="shift-right" onClick={() => this.shiftRight()}>
          <img className="right-button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Chevron-down%2C_Web_Fundamentals.svg/2000px-Chevron-down%2C_Web_Fundamentals.svg.png"/>
        </button>
      </div>
    );
  }
}

export default SpotIndex;
