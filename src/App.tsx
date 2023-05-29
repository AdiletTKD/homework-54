import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './components/cells';

function App() {
  return (
    <div className="App">
      <Cell openCell={false}  />
      <div className='game'>
        
      </div>
    </div>
  );
}

export default App;
