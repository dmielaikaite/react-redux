import React from 'react';

import VideoStationListItem from './video_list_item';

const VideoList = (props) => {
  
  const videoItems = props.videos.map((video) => {
    return (
      <VideoStationListItem
        handleVideoSelect={props.handleVideoSelect}
        key={video.etag}
        video={video}/>
    );
  })

  return (
    <ul className="list-group col-md-4">
      {videoItems}
    </ul>
  );
}

export default VideoList;
