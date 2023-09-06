import React, { useState } from 'react';
import ASView from './ASView';
import TGSView from './TGSView';

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
      {currentView === 'AS' ? (
        <ASView onClick={handleButtonClick} />
      ) : (
        <TGSView onClick={handleButtonClick} />
      )}
    </div>
  );
}

export default App;