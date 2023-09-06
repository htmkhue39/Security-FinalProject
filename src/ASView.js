import React from 'react';
import EncryptView from './EncryptView';

function ASView({ onClick }) {
  return (
    <div>
      <h1>AS View</h1>
      <button onClick={onClick}>Get Contact from AS</button>
      <EncryptView />
    </div>
  );
}

export default ASView;