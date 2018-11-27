import React, { Component } from 'react';

import SeasonDisplay from './seasonDisplay';

class Learn extends Component {

//if we run with babel then constructor is not needed
//babel implements constructor function for us
  state = {
    seasonTitle: '',
    latitude: null,
    longitude: null,
    errorMessage: ''
  };

  getGeoLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        this.setState({ errorMessage: error.message })
      }
    );
  }

  //recommended to do data loading not a constructor but here
  //calls automatically after we render a component
  //called only once
  componentDidMount() {
    console.log('my component was rendered once');
    this.getGeoLocation();
  }

  //if we re-rendering component then this function will be called automatically
  componentDidUpdate() {
    console.log('my component was re-rendered')
  }

  //good place to do cleanup
  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <SeasonDisplay
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          errorMessage={this.state.errorMessage} />
      </div>
    );
  }
}

export default Learn;
