import React from 'react';
import moment from 'moment';

const seasonObject = {
  winter:{
    iconName: "snowflake",
    text: "chilly time get some tea for yourself"
  },
  summer: {
    iconName: "sun",
    text: "beach time"
  }
}

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
  const {iconName, text} = seasonObject[season];

  if (props.errorMessage && !props.latitude) {
    return (
      <div>
        <p>Error message:{props.errorMessage}</p>
      </div>
    );
  }
  if (!props.errorMessage && props.latitude) {
    return (
      <div className={`season-display ${season}`}>
        {text}
        <i className={`icon-left massive ${iconName} icon`}/>
        <i className={`icon-right massive ${iconName} icon`}/>
        {/* <p>latitude: {props.latitude}</p>
        <p>longitude: {props.longitude}</p> */}
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
