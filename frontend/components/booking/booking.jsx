import React from 'react';
import { DateRangePicker } from 'react-dates';
import { withRouter } from 'react-router';
import { START_DATE, END_DATE } from 'react-dates/constants';

class Booking extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      startDate: '',
      endDate: '',
      guests: 0
    };
  }

  componentWillReceiveProps(newProps) {
    if(this.props.errors.length > 0) {
      this.props.clear();
    }
  }

  componentDidMount() {
    if(this.props.errors.length > 0) {
      this.props.clear();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clear();
    let startDate = this.formatMoment(this.state.startDate);
    let endDate = this.formatMoment(this.state.endDate);
    if (this.props.currentUser) {
      this.props.createBooking({
        start_date: startDate,
        end_date: endDate,
        spot_id: this.props.spot.id,
        guest_number: parseInt(this.state.guests)
      }).then(() => this.props.router.push(`/bookings`));
    }
  }

  update(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  formatMoment(moment) {
    if (moment !== '') {
      let momentString = moment.format('YYYY,MM,DD');
      return momentString;
    }
  }

  dateRange(momentA, momentB) {
    if (momentA !== '' && momentB !== '') {
      return momentB.diff(momentA, 'days');
    } else {
      return 0;
    }
  }

  renderErrors() {
    if (!this.props.currentUser) {
      return (<li><h2>Not Logged In</h2></li>);
    } else if (this.props.errors) {
      return (this.props.errors.map((err, idx) => {
        return (<li key={idx}>{ err }</li>);
      }));
    }
  }

  render() {
    const price = this.props.spot.price;
    const dateRange = this.dateRange(this.state.startDate, this.state.endDate);
    const guests = this.state.guests;
    return(
      <div className="booking-container">
        <form className="booking-form" onSubmit={ (e) => this.handleSubmit(e) }>
          <div className="booking-price">
            ${ this.props.spot.price} per night
          </div>
          <div className="calendar-label">
            <p>Check In</p>
            <p>Check Out</p>
          </div>
          <div className="date-range-calendar">
            <DateRangePicker
              startDate={ this.state.startDate }
              endDate={ this.state.endDate }
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={ this.state.focusedInput }
              onFocusChange={ focusedInput => this.setState({ focusedInput }) } />
          </div>
          <div className="numbers">
            <input
              className="guest-number"
              type="number"
              placeholder="# of Guests"
              onChange={ this.update('guests') } />
          </div>
          <div className="total-cost">
            ${ price } * { dateRange } days * { guests } guests = ${ dateRange * price * guests }
          </div>
          <div className="booking-errors">
            <ul>
              { this.renderErrors() }
            </ul>
          </div>
          <input className="booking-submit" type="submit" value="Book"/>
        </form>
      </div>
    );
  }

}

export default withRouter(Booking);
