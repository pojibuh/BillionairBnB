import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.startDate,
      endDate: this.props.endDate
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
        <div className="search-bar">
          <form className="search-query">
            <input
              className="where"
              type="text"
              placeholder="Anywhere"/>
              <button className="when">
                <DateRangePicker
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput => this.setState({ focusedInput })}
                />
              </button>
            <input className="how-many" placeholder="# of Guests"/>
          </form>
        </div>
    );
  }
}

export default SearchBar;
