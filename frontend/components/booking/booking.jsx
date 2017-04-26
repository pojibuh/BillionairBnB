import React from 'react';
import { DateRangePicker } from 'react-dates';
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

  handleSubmit(e) {
    e.preventDefault();
    let startDate = this.formatMoment(this.state.startDate);
    let endDate = this.formatMoment(this.state.endDate);
    this.props.createBooking({
      startDate:
    }).then();
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

  render() {
    const price = this.props.spot.price;
    const dateRange = this.dateRange(this.state.startDate, this.state.endDate);
    const guests = this.state.guests;
    return(
      <div className="booking-container">
        <form>
          <div className="booking-price">
            ${ this.props.spot.price} per night
          </div>
          <div className="date-range-calendar">
            <DateRangePicker
              startDate={ this.state.startDate }
              endDate={ this.state.endDate }
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={ this.state.focusedInput }
              onFocusChange={ focusedInput => this.setState({ focusedInput }) } />
          </div>
          <div>
            <input
              className="how-many"
              type="number"
              placeholder="# of Guests"
              onChange={ this.update('guests') } />
          </div>
          <div className="total-cost">
            Total Cost: ${ price } * { dateRange } days * { guests } guests = ${ dateRange * price * guests}
          </div>
          <input className="booking-submit" type="submit" value="Book"/>
        </form>
        <div className="booking-errors">
          
        </div>
      </div>
    );
  }

}

export default Booking;
