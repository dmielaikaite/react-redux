import React from 'react';
import faker from 'faker';

const NativeComponenet = () => {
  return (
    <div>
      <div className="badge badge-secondary" id="nativeComponent">
        my first native component
      </div>
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
          </a>
          <div className="content">
            <a href="/" className="author">
              Sam
            </a>
            <div className="metadata">
              <span className="date"> Today 6:00pm</span>
            </div>
            <div className="text"> Nice post! </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NativeComponenet;
