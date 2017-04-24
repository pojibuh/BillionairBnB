import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '',
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      guests: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
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
              placeholder="Anywhere"/>
              <DateRangePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
              />
            <input className="how-many" placeholder="# of Guests"/>
            <input className="search-submit-button" type="submit"/>
          </form>
        </div>
    );
  }
}

export default SearchBar;
