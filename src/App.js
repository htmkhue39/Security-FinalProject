import React, { useState } from 'react';
import './App.css';
import ASView from './components/ASView';
import TGSView from './components/TGSView';
import Banner from './components/Banner';

function App() {
  const [currentView, setCurrentView] = useState('AS');

  const handleButtonClick = () => {
    if (currentView === 'AS') {
      setCurrentView('TGS');
    }
    else {
      setCurrentView('AS');
    }
  };

  return (
    <div className="App">
      <Banner />
      {currentView === 'AS' ? (
        <ASView onClick={handleButtonClick} />
      ) : (
        <TGSView onClick={handleButtonClick} />
      )}
    </div>
  );
}

export default App;