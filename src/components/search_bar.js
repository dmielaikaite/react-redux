import React, { Component } from 'react';


class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    let name = e.target.name;
    this.setState({ [name]: e.target.value})
    this.props.handleSearchTermChange(e.target.value);
  }

  render() {
    return(
      <div className="search-bar">
        <input
          name="term"
          value={this.state.term}
          onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default SearchBar;
