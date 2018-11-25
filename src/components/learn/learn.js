import React from 'react';

const LearnPage = () => {
  return (
    <div>
      <label>Enter name</label>
      <input name="name" type="text" />
      <button style={{backgroundColor: 'red'}}>Submit</button>
    </div>
  );
}

export default LearnPage;
