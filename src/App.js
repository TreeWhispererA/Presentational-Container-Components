import React from 'react';
import './style.css';
//import the components
import BuyerContainer from './components/BuyerContainer';
import SellerContainer from './components/SellerContainer';
export default function App() {
  return (
    <div>
      <BuyerContainer />
      <SellerContainer />
    </div>
  );
}
