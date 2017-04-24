import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.startDate,
      endDate: this.props.endDate
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('hey it works');
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
          </form>
        </div>
    );
  }
}

export default SearchBar;
