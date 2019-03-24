import jsonPlaceholder from '../api/jsonPlaceholder';
import _ from 'lodash';

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
    dispatch({ type: 'FETCH_POST', payload: response.data })
  };
}

// export const fetchUser = (id) => {
//   return async (dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data})
//   }
// }

export const fetchUser = (id) => {
  return (dispatch) => {
    _fetchUser(id, dispatch);
  }
}

const _fetchUser = _.memoize(async(id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data})
});
