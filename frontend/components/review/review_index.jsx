import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    const reviews = Object.values(this.props.reviews);
    let allReviews = reviews.map((review, idx) => {
      return <div key={idx}><ReviewIndexItem review={review} key={idx}/></div>;
    });
    if (reviews.length > 0) {
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
