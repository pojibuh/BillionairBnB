import React from 'react';

class SpotIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const spot = this.props.spot;
    return(
      <figure className="spot-item">
        <div>
          <img src={spot.image_url}/>
        </div>
        <div className="spot-item" >
          <span key={spot.id}>{spot.description}</span>
          <span key={(spot.id + 1)}>{`$${spot.price}`}</span>
        </div>
      </figure>
    );
  }
}

export default SpotIndexItem;
