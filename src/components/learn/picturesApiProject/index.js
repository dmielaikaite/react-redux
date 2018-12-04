import React, { Component } from 'react';

import SearchBar from './searchBar';

import './style.css';

class Pictures extends Component {

  //calls after render
  componentDidMount(){
    console.log('componentDidMount')
  }

  onSearchSubmit(searchText){
    console.log('from onSearchSubmit',searchText)
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
