import React from 'react';
import faker from 'faker';

import NativeCommentDetails from './native_comment_detail';

const NativeComponenet = () => {
  return (
    <div>
      <div className="badge badge-secondary" id="nativeComponent">
        my first native component
      </div >
      <div className="ui container comments">
        <NativeCommentDetails
          picture={faker.image.avatar()}
          author="name1"
          publishedDate="11-09-2018"
          content="content1" />
        <NativeCommentDetails
          picture={faker.image.avatar()}
          author="name2"
          publishedDate="11-07-2018"
          content="content2" />
        <NativeCommentDetails
          picture={faker.image.avatar()}
          author="name3"
          publishedDate="11-04-2018"
          content="content3" />
      </div>
    </div>
  );
}

export default NativeComponenet;
