import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { fetchBounds } from '../../util/search_api_util';
import { START_DATE, END_DATE } from 'react-dates/constants';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      address: '',
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      guests: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetchBounds(this.state.address).then(gmaps => {
      if (!!gmaps.results[0].geometry.bounds) {
        this.props.updateBounds(gmaps.results[0].geometry.bounds);
      }
    }).then(() => this.props.router.push('/search'));
  }

  update(key) {
    return ((e) => {
      this.setState({[key]: e.currentTarget.value});
    });
  }

  render() {
    return(
        <div className="search-bar">
          <form className="search-query" onSubmit={(e) => this.handleSubmit(e)}>
            <input
              className="where"
              type="text"
              placeholder="Anywhere"
              onChange={this.update('address')} />
            <DateRangePicker
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })} />
            <input
              className="how-many"
              type="number"
              placeholder="# of Guests"
              onChange={this.update('guests')} />
            <input
              className="search-submit-button"
              type="submit" />
          </form>
        </div>
    );
  }
}

export default withRouter(SearchBar);
