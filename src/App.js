import React, { useState } from 'react';
import ASView from './ASView';
import TGSView from './TGSView';

function App() {
  const [currentView, setCurrentView] = useState('AS');

  const handleButtonClick = () => {
    if (currentView === 'AS') {
      setCurrentView('TGS');
    }
  };

  return (
    <div className="App">
      {currentView === 'AS' ? (
        <ASView onClick={handleButtonClick} />
      ) : (
        <TGSView />
      )}
    </div>
  );
}

export default App;