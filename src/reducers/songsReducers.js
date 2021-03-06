export const songsReducer = () => {
  return [
    { title: "no scrubs", duration: "4:00" },
    { title: "macarena", duration: "2:00" },
    { title: "all star", duration: "3:10" },
    { title: "moon", duration: "6:13" }
  ]
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
};
