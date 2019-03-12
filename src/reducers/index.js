import { combineReducers } from 'redux';
import { songsReducer , selectedSongReducer } from './songsReducers'

//key the name of state
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
