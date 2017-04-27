import React from 'react';
import { withRouter } from 'react-router';

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const rating = this.state.rating;
    const body = this.state.body;
    if ((rating > 0 && rating < 6) && body) {
      this.props.createReview(this.state);
    }
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  render() {
    return (
      <div className="review-form-box">
        <form onSubmit={ (e) => this.handleSubmit(e) } className="review-form">
          <div className="form-text">
            <textarea
              value={this.state.body}
              placeholder="Write a Review"
              rows="10"
              cols="40">
            </textarea>
          </div>
          <div className="form-rating">
            <input
              type="number"
              value={this.state.rating}
              placeholder="Rate your stay (1 to 5, worst to best)"/>
          </div>
          <input type="submit" value="Submit Review" className="review-form-submit"/>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
