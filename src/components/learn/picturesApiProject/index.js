import React, { Component } from 'react';

import SearchBar from './searchBar';

import unsplash from '../../../api/unsplash';
import './style.css';

class Pictures extends Component {

  state = { images: [] }

  //instead of promises
  onSearchSubmit = async (searchText) => {
    //addres and object
    const response = await unsplash.get('/search/photos', {
      params: { query: searchText },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.state.images.length}
      </div>
    );
  }
}

export default Pictures;
