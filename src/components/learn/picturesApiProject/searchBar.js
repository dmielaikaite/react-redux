import React, { Component } from 'react';

class SearchBar extends Component {
  state = { searchText: '' }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.searchText);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Image search: {this.state.searchText}</label>
            <input
              name="searchText"
              type="text"
              value={this.state.searchText}
              onChange={(e) => this.setState({ searchText : e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
