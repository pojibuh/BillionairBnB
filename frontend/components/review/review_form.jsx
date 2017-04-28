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
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const currentUser = this.props.currentUser;
    const rating = this.state.rating;
    const body = this.state.body;
    const spot = this.props.spot;
    const fullState = Object.assign(this.state, {spot_id: spot.id});
    if ((rating > 0 && rating < 6) && body && currentUser) {
      this.props.createReview(fullState);
    }
  }

  update(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  render() {
    return (
      <div className="review-form-box">
        <form onSubmit={ (e) => this.handleSubmit(e) } className="review-form">
          <div className="form-text">
            <textarea
              value={this.state.body}
              onChange={ this.update('body') }
              placeholder="Write a Review"
              rows="10"
              cols="40">
            </textarea>
          </div>
          <div className="form-rating">
            <input
              type="number"
              className="rating"
              value={this.state.rating}
              onChange={ this.update('rating') }
              placeholder="Rate your stay (1 to 5, worst to best)"/>
          </div>
          <input type="submit" value="Submit Review" className="review-form-submit"/>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
