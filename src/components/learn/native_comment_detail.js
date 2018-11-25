import React from 'react';

const NativeCommentDetails = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.picture} />
      </a>
      <div className="content">
        <a href="/" className="author">{props.author}</a>
        <div className="metadata">
          <span className="date"> {props.publishedDate}</span>
        </div>
        <div className="text"> {props.content} </div>
      </div>
    </div>
  );
}

export default NativeCommentDetails;
