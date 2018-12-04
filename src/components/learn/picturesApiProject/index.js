import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './searchBar';

import './style.css';

class Pictures extends Component {

  async onSearchSubmit(searchText){
    //addres and object
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {query: searchText},
      headers: {
        Authorization: 'Client-ID bead85423c67fe55eb831a9e626888f756e003087348b5c933d46319f14f51c8'
      }
    });
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default Pictures;
