import React from 'react';

const NewsItem = (props) => {

  return(
    <li className="list-group-item">
      <div className="article-header">
        <small className="articlePublishDate">{props.article.publishedAt}</small>
        <h5 className="mb-1">{props.article.title}</h5>
      </div>
      <div className="article-content">
        <div className="article-description col-md-8">{props.article.description}</div>
        <img className="img-thumbnail" src={props.article.urlToImage}/>
      </div>
    </li>
  )

}

export default NewsItem;
