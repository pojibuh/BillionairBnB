import React from 'react';

class SpotIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const spot = this.props.spot;
    return(
      <section className="spot-item">
        <figure>
          <img src={spot.image_url}/>
        </figure>
        <ul>
          <li key={spot.id}>{spot.description}</li>
          <li key={(spot.id + 1)}>{spot.price}</li>
        </ul>
      </section>
    );
  }
}

export default SpotIndexItem;
