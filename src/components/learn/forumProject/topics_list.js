import React, { Component } from 'react';

import TopicsStationListItem from './topics_list_item';

const TopicsList = ({topics_list}) => {

  const topics = topics_list.map((topic) => {
    return(
      <TopicsStationListItem
        topic={topic.name}
        key={topic.id}/>
    )
  })

  return (
    <ul className="list-group col-md-4">
      {topics}
    </ul>
  );
}

export default TopicsList;
