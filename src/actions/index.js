//action creator
export const selectSong = song => {
  //return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}

export const fetchPosts = () => {
  return {
    type: 'FETCH_POST'
  }
}
