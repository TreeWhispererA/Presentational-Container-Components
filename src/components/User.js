import * as React from 'react';

const User = ({ name, onClick }) => {
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={onClick}>Click the button</button>
    </div>
  );
};

export default User;
