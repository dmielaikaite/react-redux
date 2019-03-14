import { combineReducers } from 'redux';
import { songsReducer , selectedSongReducer } from './songsReducers';
import  { postsReducer } from './postsReducer';

//key the name of state
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  posts: postsReducer
})
