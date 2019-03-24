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

//calling fetchPostsAndUsers and then return async dispatch{}
//pass dispatch as a first argument
export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
  await dispatch(fetchPosts());
  //go through all post and return only userId
  //_uniq return only uniq entries
  const userId = _.uniq(_.map(getState().posts, 'userId'));
  //for each id we are calling fetchUser
  userId.forEach( id => dispatch(fetchUser(id)));
  //we can use _chain here too
  // _.chain(getState().posts)
  //   .map('userId')
  //   .uniq()
  //   .forEach(id => dispatch(fetchUser(id)))
  //   .value()
}

//fetch one time each user
//with _.memoize
// export const fetchUser = (id) => {
//   return (dispatch) => {
//     _fetchUser(id, dispatch);
//   }
// }
// const _fetchUser = _.memoize(async(id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data})
// });

//new version of non memoize
export const fetchUser = (id) => {
    return async(dispatch) => {
      const response = await jsonPlaceholder.get(`/users/${id}`);
      dispatch({ type: 'FETCH_USER', payload: response.data})
    }
}
