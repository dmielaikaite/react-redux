import React, { Component } from 'react';

import SearchBar from './searchBar';

class Pictures extends Component {

  //calls after render
  componentDidMount(){
    console.log('componentDidMount')
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar/>
      </div>
    );
  }
}

export default Pictures;
