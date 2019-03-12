import jsonPlaceholder from '../api/jsonPlaceholder';

//action creator
export const selectSong = song => {
  //return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}

export const fetchPosts = () => {
  //getState argument exist at thunk
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POST', payload: response })
  };
}
