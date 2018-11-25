import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyDjOpu0NKU-p5HSmJNEPI_PruXY9-yiYDQ';

class VidoeIndex extends Component{

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('tesla');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return(
      <div>
        <SearchBar handleSearchTermChange={videoSearch}/>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList videos={this.state.videos}
                     handleVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
        </div>
      </div>
    );
  }
}

export default VidoeIndex;
