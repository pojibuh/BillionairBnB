import React from 'react';

class ReviewIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const review = this.props.review;
    return (
      <div className="individual-review">
        <div className="review-top-half">
          <div className="review-user">
          { review.author.fname }
          </div>
          <div className="review-rating">
            Rating: { review.rating } out of 5
          </div>
        </div>
        <div className="review-bottom-half">
          { review.body }
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
