import React from 'react';
import EncryptView from './EncryptView';
import './ASView.css';

function ASView({ onClick }) {
  return (
    <div>
      <div className='as-view'>
        <h1>Authentication Server</h1>
        <button onClick={onClick}>Get in contact with the Authentication Server</button>
      </div>
      <div className="separator-line"></div>
      <EncryptView />
    </div>
  );
}

export default ASView;