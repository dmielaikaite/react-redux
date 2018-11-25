import React from 'react';

import NativeComponenet from './native_component';

const LearnPage = () => {
  const myButtonText = 'Click me!';

  return (
    <div>
      <div className="row">
        <label htmlFor="name">Enter name</label>
        <input name="name" type="text" />
        <button style={{ backgroundColor: 'red' }}>{myButtonText}</button>
      </div>
      <div className="row">
        <NativeComponenet />
      </div>
    </div>
  );
}

export default LearnPage;
