import React, { Component } from 'react';

import SeasonDisplay from './seasonDisplay';

class Learn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      seasonTitle: '',
      latitude: null,
      longitude: null,
      errorMessage: ''
    };

    this.getGeoLocation();
  }

  getGeoLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        console.log(position.coords)
      },
      (error) => {
        this.setState({errorMessage: error.message})
      }
    );
  }

//calls automatically after we render a component
  componentDidMount(){
    console.log('my component was rendered once')
  }

//if we re-rendering component then this function will be called automatically
  componentDidUpdate(){
    console.log('my component was re-rendered')
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
