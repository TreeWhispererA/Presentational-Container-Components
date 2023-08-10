import * as React from 'react';
import UserComponents from './User';
const BuyerContainer = () => {
  return (
    <div>
      <UserComponents
        name={'John Doe'}
        onClick={() => {
          console.log('Buyer clicked');
        }}
      />
    </div>
  );
};

export default BuyerContainer;
