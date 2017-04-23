import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
        <div className="search-bar">
          <form className="search-query">
            <div className="where">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input
                className="location"
                type="search"
                placeholder="Anywhere"/>
            </div>
            <div className="when">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              <input />
            </div>
            <div className="how-many">
              <i className="fa fa-users" aria-hidden="true"></i>
              <input />
            </div>
          </form>
        </div>
    );
  }
}

export default SearchBar;
