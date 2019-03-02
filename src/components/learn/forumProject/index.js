import React, { Component } from 'react';

import TopicsSearchBar from './topics_search_bar';
import TopicsList from './topics_list';
import ChatBar from './chat_bar';

import './style.css';

class Forum extends Component {

  state = { topics_list: [
              {"id": 1, "name" : "environment"},
              {"id": 2, "name" : "cars"},
              {"id": 3, "name" : "remove work"},
              {"id": 4, "name" : "flowers"},
            ]
  }

  render(){
    return(
      <div>
        < TopicsSearchBar/>
        <div className="row">
          < ChatBar />
          < TopicsList topics_list={this.state.topics_list}/>
        </div>
      </div>
    )
  }
}

export default Forum;
