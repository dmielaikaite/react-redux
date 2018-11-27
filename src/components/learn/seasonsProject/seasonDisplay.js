import React from 'react';
import moment from 'moment';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  }
  else {
    return lat < 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {

  const season = getSeason(props.latitude, moment().format("M"));
  const icon = season === 'winter' ? 'snowflake' : 'sun';

  if (props.errorMessage && !props.latitude) {
    return (
      <div>
        <p>Error message:{props.errorMessage}</p>
      </div>
    );
  }
  if (!props.errorMessage && props.latitude) {
    return (
      <div>
        season display: <h2> {season === 'winter' ?
          'chilly time get some tea for yourself' :
          'beach time'} </h2>
        <i className={`${icon} icon`}/>
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
