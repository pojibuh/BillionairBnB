import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews({
      spot_id: this.props.spot.id
    });
  }

  render() {
    const reviews = Object.values(this.props.reviews);
    if(reviews.length > 0) {
      let allReviews = reviews.map((review, idx) => {
        return <div key={idx}><ReviewIndexItem review={review} key={idx}/></div>;
      });
      return (
        <div className="all-reviews">
          { allReviews }
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default ReviewIndex;
