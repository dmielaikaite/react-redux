import React from 'react';

import NewsItem from './new_list_item';

const NewsList = (props) => {

  const newsItems = props.articles.map((item) => {
    console.log(item);
    return(
      <NewsItem
        key={item.publishedAt}
        article={item}/>
    )
  })

  return(
    <ul className="list-group">
      {newsItems}
    </ul>
  )
}

export default NewsList;
