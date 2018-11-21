import React from 'react';

const NewsItem = (props) => {

  return(
    <li className="list-group-item">
      <div className="articleHeader">
        <small className="articlePublishDate">{props.article.publishedAt}</small>
        <h5 className="mb-1">{props.article.title}</h5>
      </div>
      <div className="article-image">
        <img className="img-thumbnail" src={props.article.urlToImage}/>
      </div>
      <div className="mb-1 article-description">
        {props.article.description}
      </div>
    </li>
  )

}

export default NewsItem;
