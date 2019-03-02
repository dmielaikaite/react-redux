import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { selectSong } from '../../../actions';

class Songs extends Component {
  render() {
    return(
      <div>
        songs
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return{
    songs: state.songs
  };
}

//our component as second function call
export default connect(mapStateToProps)(Songs);
