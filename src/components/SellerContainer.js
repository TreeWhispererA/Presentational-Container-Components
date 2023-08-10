import * as React from 'react';
import UserComponents from './User';
const SellerContainer = () => {
  return (
    <div>
      <UserComponents
        name={'Caleb Martin'}
        onClick={() => {
          console.log('Seller Clicked');
        }}
      />
    </div>
  );
};

export default SellerContainer;
