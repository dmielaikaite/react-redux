import React from 'react';

const SeasonDisplay = (props) => {
  if (props.errorMessage && !props.latitude){
    return (
      <div>
        <p>Error message:{props.errorMessage}</p>
      </div>
    );
  }
  if(!props.errorMessage && props.latitude){
    return (
      <div>
        <p>latitude: {props.latitude}</p>
        <p>longitude: {props.longitude}</p>
      </div>
    );
  }
  return (
    <div>
      Loading....
    </div>
  );
}

export default SeasonDisplay;
