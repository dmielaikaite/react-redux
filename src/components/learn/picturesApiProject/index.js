import React, { Component } from 'react';

import SearchBar from './searchBar';

import './style.css';

class Pictures extends Component {

  //calls after render
  componentDidMount(){
    console.log('componentDidMount')
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <p className="testing">working with style</p>

        <SearchBar/>
      </div>
    );
  }
}

export default Pictures;
