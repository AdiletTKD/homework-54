import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './components/cells';

function App() {
  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < 36; i++) {
      cells.push(<Cell key={i} clicked={false} hasItem={false} />)
    }
    console.log(cells);
    return cells;
  }

  return (
    <div className="App">
      <div className='game'> {renderCells()} </div>
    </div>
  );
};

export default App;
