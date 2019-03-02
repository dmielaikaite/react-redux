//action creator
export const selectSong = song => {
  //return an action
  retrun {
    type: 'SONG_SELECTED',
    payload: song
  }
}
