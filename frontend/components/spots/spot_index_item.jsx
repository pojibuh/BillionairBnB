import React from 'react';
import { Link } from 'react-router';

class SpotIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const spot = this.props.spot;
    let description;
    if (spot.description.length >= 36) {
      description = spot.description.slice(0, 36) + "...";
    } else {
      description = spot.description;
    }
    return(
      <Link to={`/spots/${spot.id}`}>
        <figure className="spot-item">
          <div className="spot-img">
            <img src={spot.image_url}/>
          </div>
          <div className="spot-info" >
            <span className="price" key={(spot.id)} >{`$${spot.price},`}</span>
            <span key={spot.id + 1} className="description">{description}</span>
          </div>
        </figure>
      </Link>
    );
  }
}

export default SpotIndexItem;
