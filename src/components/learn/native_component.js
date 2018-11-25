import React from 'react';
import faker from 'faker';

import NativeCommentDetails from './native_comment_detail';
import ApprovalCard from './approval_card';

const NativeComponenet = () => {
  return (
    <div>
      <div className="ui container comments">
        <ApprovalCard>
          <NativeCommentDetails
            avatar={faker.image.avatar()}
            author="name1"
            publishedDate="11-09-2018"
            content="content1" />
        </ApprovalCard>
        <ApprovalCard>
          <NativeCommentDetails
            avatar={faker.image.avatar()}
            author="name2"
            publishedDate="11-07-2018"
            content="content2" />
        </ApprovalCard>
        <ApprovalCard>
          <NativeCommentDetails
            avatar={faker.image.avatar()}
            author="name3"
            publishedDate="11-04-2018"
            content="content3" />
        </ApprovalCard>
        <ApprovalCard> are you sure? </ApprovalCard>
      </div>
    </div>
  );
}

export default NativeComponenet;
