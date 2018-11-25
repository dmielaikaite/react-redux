import React from 'react';

const LearnPage = () => {
  const myButtonText = 'Click me!';

  return (
    <div>
      <label htmlFor="name">Enter name</label>
      <input name="name" type="text" />
      <button style={{ backgroundColor: 'red' }}>{myButtonText}</button>
    </div>
  );
}

export default LearnPage;
